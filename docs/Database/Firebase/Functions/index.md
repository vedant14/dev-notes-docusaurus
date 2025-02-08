# Functions

### Initialize functions 
- Create a empty folder to run this command into
- You might be asked to login to firebase
- Follow the setup commands as mentioned then
```
firebase init functions
```

### Deploy functions

```
firebase deploy --only functions
```


### Default configurations
- I use it to get started
```
const functions = require("firebase-functions");
const admin = require("firebase-admin");
var express = require("express");
var app = express();
const cors = require("cors")({ origin: true });
app.use(cors);
admin.initializeApp();
const db = admin.firestore();

app.get("/", function (req, res) {
	res.status(200).send("No User ID");
});

exports.app = functions.https.onRequest(app);
```



### To Start the emulators
- Test the APIs locally
- Check the logs to get the URL for testing
```
firebase emulators:start --only functions
```

### To test locally

Check emulator logs to get the base URL



### To kill a process for emulators
- Sometimes the processes are not killed properly
```
sudo lsof -i :8000
```

- Add the pid in this command
```
kill PID
```



