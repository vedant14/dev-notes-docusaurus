### Using Map function

```javascript
{data.allQuestionsJson.nodes.map(item => (
<div>{item.question}</div>
))}
```
### Mapping over a node
  
```jsx

render={data => (
<div class="featured-products">
	{data.allContentfulFeaturedProduct.edges.map(({ node }, i) => (
 <div class="product" key={i}>
  <div>{product}</div>
 </div>
	))}
</div>
)}
```
### Repeat n times
id:: 6496cdde-eced-45a3-9cf6-964b2ef14353
```
const array = []
let i = 0
for (; i < 11; i++) {
	array.push(i)
}
```
- In the JSX you can use array
  ```
  {array.map(item => (
  	<button key={item} onClick={() => handleAnswerOptionClick(item)}>
  {item}
  	</button>
  ))}
  ```