### 1. Install Prisma and initialise
```terminal
npm install prisma --save-dev
```

```terminal
npx prisma init
```


### 2. Check if prisma is imported in `prisma/schema.prisma`

```js
datasource db { provider = "postgresql" url = env("DATABASE_URL") }
```

### 3. Install client
- In the terminal
```terminal
npm install @prisma/client
```

```terminal
npx prisma generate
```

### 4. Importing prisma
```
mkdir utils && touch utils/prisma.js
```

- Inside the `prisma.js` file
```js
import { PrismaClient } from **'@prisma/client'**

const prisma = new PrismaClient()
```


### 5. Test if you already have data
- Pull DB
```terminal
npm prisma db pull
```

- Create API
```terminal
mkdir pages/api && touch pages/api/first-api.js
```

- File
```js
import { prisma } from "@/utils/prisma";

export default async function handler(req, res) {
	const allUsers = await prisma.stores.findMany();
	res.status(200).json(allUsers);
}
```


### 6. Else create data 
https://www.prisma.io/docs/orm/prisma-migrate/getting-started