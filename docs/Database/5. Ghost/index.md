# Ghost
### Installing the cli
```
npm install ghost-cli@latest -g
```


### Install Ghost
- Need node version `14.16.1` to run ghost
```
ghost install local
```

## Starting & Stopping
- Ghost runs in a separate background process and remains running until you stop it or restart your computer. So you may find these commands useful for taming it:

### To Start
```
ghost start
```

### To stop Ghost
```
ghost stop
``` 

### View logs
```
ghost log
```

### List of all the running ghost blogs
```
ghost ls
```

- Run `ghost help` for a list of available commands, or explore the full [Ghost-CLI documentation](https://ghost.org/docs/api/ghost-cli/)