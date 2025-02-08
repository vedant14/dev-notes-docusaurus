### install graphql-request
```
npm i graphql-request
```


### Get static data
```
import { GraphQLClient } from "graphql-request";
const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL);

export async function getStaticProps({ params }) {
	const { test } = await graphcms.request(
		`query TestPageQuery($slug: String!){
	    test(where: {slug: $slug}) {
				id
		    slug
		    title
		    description
		    testquestions {
		      questionString
		      answers
		      trivia {
		        html
		        text
		      }
		      gif {
		        url
		      }
		    }
	    }
	  }`,
		{
			slug: params.slug,
		}
	);

	return {
		props: {
			test,
		},
	};
}
```
