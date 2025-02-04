# Sanity

- This is a nice CMS.
- Too much work to get started
- Too slow in my opinion
- Multi-references are weird.
- Validations are weird as well.
- Not a big community.

### Install Sanity

1. It will also ask to the select project

```
npm create sanity@latest -- --template clean
```

```bash
cd sanity && npm run dev
```

### Running Project

### Creating Schemas

1. Cd into the project inside Sanity

```
touch pet.js
```

```javascript
// schemas/pet.js
export default {
  name: "pet",
  type: "document",
  title: "Pet",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
  ],
};
```

```javascript
// schemas/index.js
import pet from "./pet";
export const schemaTypes = [pet];
```
