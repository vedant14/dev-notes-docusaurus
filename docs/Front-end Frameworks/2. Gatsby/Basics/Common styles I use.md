### Import Colors
- Make sure the colors are in the `GlobalStyles.js` file
    
```bash
	import { colors } from "../../styles/GlobalStyles"
```
    
- Usage
    
```jsx
color: ${colors.white};
```
    

### Media Screen
-  Change the width to get the desired output `786` for table `1024` for desktop

```css
@media screen and (min-width: 768px) {
	margin: 20px;
}	

```
    


### Importing an image
    
```bash
import DateIcon from "../../images/calendar.svg"	

<img src={DateIcon} alt="date" />
```
    


### Creating a grid
- Read more here [Link](https://css-tricks.com/snippets/css/complete-guide-grid/)
    
```
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 5px;
	@media (min-width: 768px) {
			grid-template: 3fr / 1fr 2fr;
			grid-area: sidebar;
	}

```
    
```jsx
grid-template-areas: 
	"header header header header"
	"main main . sidebar"
	"footer footer footer footer";
```
   

### Using Props

1.  Here I am checking if the prop is event
    
```bash

background: ${props =>
		props.col % 2 === 0 ? `${colors.off_primary}` : `${colors.nav}`};
```


### Variables in string

```
<Link to={`/properties/${id}`}>
```