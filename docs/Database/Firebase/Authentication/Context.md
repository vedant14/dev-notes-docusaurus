### Create the context file

```
mkdir context
```

```
touch context/AuthContext.js
```


### Fill the file

```
import { useEffect, useState, createContext, useContext } from "react";
import { auth } from "../utils/firebaseConfig";
// import { getUserProfile } from "../utils/firebaseUserRequests";
const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

  

export function AuthProvider({ children }) {
const [currentUser, setCurrentUser] = useState(null);
const [uniqueId, setUniqueId] = useState(null);
const [authenticatedState, setAuthenticatedState] = useState("not-authenticated");

  
// async function checkUser() {
	// const user = await auth.currentUser;
		// if (user) {
			// getUserProfile(setCurrentUser, user.uid);
			// setAccessToken(user.accessToken);
	// }
// }

useEffect(() => {
	const unsubscribe = auth.onAuthStateChanged((user) => {
		if (user) {
			setUniqueId(user.uid);
			setAuthenticatedState("authenticated");
		} else {
			setCurrentUser(null);
			setUniqueId(null);
			setAuthenticatedState("not-authenticated");
		}
	});
	return unsubscribe;
}, []);

// useEffect(() => {
	// checkUser();
// }, [authenticatedState]);

let sharedState = {currentUser,uniqueId};
	return (
		<AuthContext.Provider value={sharedState}>{children}</AuthContext.Provider>
	);
}
```


### Create the getUser utility
- Optional
```
export async function getUserProfile(setCurrentUser, uniqueId) {
	const usersRef = doc(db, "user_profile", uniqueId);
	const userSnapShot = await getDoc(usersRef);
	if (userSnapShot.exists()) {
		setCurrentUser(userSnapShot.data());
	} else {
		setCurrentUser(null);
	}
}
```



### Call the context to the app
- In the `_app.js` file

```
import { AuthProvider } from "../context/AuthContext";
export default function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	);
}
```