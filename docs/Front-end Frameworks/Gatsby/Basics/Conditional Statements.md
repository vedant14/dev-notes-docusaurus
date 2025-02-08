## Nested conditions in JSX
- I am checking if `YoutubeLink` is `null` and if it is `null` then if the `TwitterLink` exists.
```
{item.data.YoutubeLink !== null ? (
	<Youtube link={item.data.YoutubeLink} />
) : (
	[
		item.data.TwitterLink !== null ? (
			<Twitter link={item.data.TwitterLink} />
		) : (
			<FeedbackImage
				link={item.data.SheroesLInk}
				imageUrl={item.data.Attachments[0].url}
			/>
		),
	]
)}
```