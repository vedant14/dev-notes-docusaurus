```

firebase functions:config:set config.key="SECRET_KEY" config.pass="SECRET_PASS"

```

_NOTE: You must redeploy functions to make the new configuration available_

#### **Accessing env variables**

```
const secretKey  = firebase.config().config.key;
const secretPass = firebase.config().config.pass;
```

#### **Retrieve all variables**

```
firebase functions:config:get
```

#### **Unset a variable**

```
firebase functions:config:unset config.key
```

## Using a file where we can keep all the environment variables.

`env.json`, a file that will contain all our environment variables.  

```
{
  "config": {
    "host": "domain",
    "key": "SECRET_KEY",
    "pass": "SECRET_PASS"
  }
}
```

How to deploy the variables with the `env.json` file?  

```
firebase functions:config:set env="$(cat env.json)"
```