### Using regex to create breadcrumbs
```
export function getLastLinkName(linkName, pageName) {
var re = new RegExp(`[\[]`);
if (re.test(linkName)) {
	return pageName;
} else {
var array = linkName.split("/");
		return array[array.length - 1];
	}
}
```