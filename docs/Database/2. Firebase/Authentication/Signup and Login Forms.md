### Create the pages and utilty file

```
touch pages/login.js
```

```
touch pages/signup.js
```

```
touch utils/firebaseUserRequests.js
```

## Login function
### Login form

```
import { useState } from "react";
import { userLoginEmail } from "../utils/firebaseUserRequests";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { uniqueId } = useAuth();
  const router = useRouter();
  async function userLogin(e) {
    e.preventDefault();
    if (userEmail === "" || password === "") {
      setError("Please fill all the fields");
    } else {
      userLoginEmail(userEmail, password, setError);
    }
  }
  if (uniqueId) {
    router.push("/dashboard");
  }
  return (
    <form>
      <input
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button
          onClick={(e) => userLogin(e)}
        >
          Login
        </button>
      </div>
    </form>
  );

}
```


### Create the UserLogin Utility
- In the firebaseUserRequests file
- You can change the navigations link from `/dashboard`

```
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Router from "next/router";
import { auth } from "./firebaseConfig";

export async function userLoginEmail(userEmail, password, setError) {

  await signInWithEmailAndPassword(auth, userEmail, password)
    .then(() => Router.push("/dashboard"))
    .catch((error) => {
      setError(error.message);
    });
}
```



## Signup function
### Signup Form

```
import { useState } from "react";
import { userSignUpEmail } from "../utils/firebaseUserRequests";
import { useAuth } from "../context/AuthContext"
import { useRouter } from "next/router";
export default function SignUp() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { uniqueId } = useAuth();
  const router = useRouter();
  async function userSignUp(e) {
    e.preventDefault();
    if (userEmail === "" || password === "") {
      setError("Please fill all the fields");
    } else {
      userSignUpEmail( userEmail.trim(), password, setError);
    }
  }

  if (uniqueId) {
    router.push("/dashboard");
  }

  return (
    <form>  
      <input
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button
          onClick={(e) => userLogin(e)}
        >
          SignUp
        </button>
      </div>
    </form>
  );
}
```


### Signup Utility
- In the firebaseUserRequests file
`
```
export async function userSignUpEmail( userEmail, password, setError) {
  createUserWithEmailAndPassword(auth, userEmail, password)
    .then(() => Router.push("/dashboard"))
    .catch((error) => {
      setError(error.message);
    });
}
```
