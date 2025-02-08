# Authentication Setup
- Ensure that the firebase app is setup and authentication is added


### Install Firebase 
```
npm install firebase
```

### Create config

```
mkdir utils
```

```
touch utils/firebaseConfig.js
```


- This command also has firestore and storage configs which have been committed out since they are not relevant to this part of the project
```
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

  
const firebaseConfig = {
	apiKey: "hlssfksfls2lldf",
	authDomain: "firebaseapp.com",
	projectId: "PROD",
	storageBucket: "appspot.com",
	messagingSenderId: "SENDERID",
	appId: "APP",
};

  

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);
```



