const fs = require("fs");
const path = require("path");
const lunr = require("lunr");
const matter = require("gray-matter");

const docsDir = path.join(__dirname, "./docs");
const outputDir = path.join(__dirname, "./static");
const outputFile = path.join(outputDir, "search-index.json");

const documents = [];

/**
 * Recursively reads markdown files from the docs directory
 */
const readMarkdownFiles = (dir, basePath = "") => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);

    if (entry.isDirectory()) {
      readMarkdownFiles(fullPath, relativePath);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(fileContent);

      let urlPath = `/docs/${relativePath.replace(/\.md$/, "")}`;
      let title = data.title || entry.name.replace(".md", "");

      // If the filename is "index.md", remove it from the URL
      if (entry.name === "index.md") {
        urlPath = `/docs/${basePath}`;
        title = basePath.split("/").pop().replace(".md", "");;
      }

      if(title === "index.md"){
        console.log(entry.name);
      }
      documents.push({
        id: relativePath.replace(/\.md$/, ""), // Unique ID
        title: title,
        url: urlPath,
        content: content.toLowerCase(), // Lowercase for case-insensitive search
      });
    }
  });
};

// Start reading the docs folder recursively
readMarkdownFiles(docsDir);

// Create Lunr index
const lunrIndex = lunr(function () {
  this.ref("id");
  this.field("title", { boost: 10 });
  this.field("content");

  // Optimize indexing for better search
  this.pipeline.remove(lunr.stemmer);
  this.pipeline.remove(lunr.stopWordFilter);
  this.searchPipeline.remove(lunr.stemmer);

  documents.forEach((doc) => this.add(doc));
});

// Save the generated index
fs.writeFileSync(
  outputFile,
  JSON.stringify({ index: lunrIndex, docs: documents }, null, 2)
);

console.log("Lunr index generated successfully!");
