
### Install Airtable
```
npm i airtable
```


### Get Static Data

```
import Airtable from "airtable";

const airtable = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
});

export async function getStaticProps() {
	const records = await airtable
		.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID)("Hindi")
		.select({
			fields: ["Lyrics", "Song name", "artist", "genre"],
		})
		.all();

	const songData = records.map((record) => {
		return {
			id: record.getId(),
			lyrics: record.get("Lyrics"),
			song: record.get("Song name"),
			artist: record.get("artist"),
			genre: record.get("genre"),
		};
	});

	const songOptions = records.map((record) => {
		return {
			id: record.getId(),
			song: record.get("Song name"),
			isCorrect: false,
		};
	});

	shuffleArray(songData);
	shuffleArray(songOptions);

	return {
		props: {
			songData,
			songOptions,
		},
	};
}
```