
- States are very interesting. These are variables in react that can persist just for that session of the browser. 

### Importing state with React
```
import React, { useState } from "react"
```

### Creating the variables
- Pay attention to the syntax while naming the variables
- We set a default also
```
const [selectedRole, setSelectedRole] = useState(null)
```

### Changing the variable value
```		
setSelectedRole(null)
```

### Toggle States
```
function toggleIndiaPricing() {
	setSelectedIndia((prevSelectedIndia) => !prevSelectedIndia);
}
```

```
<button onClick={toggleIndiaPricing}>India</button>
```

