### Start a server
```
brew services start postgresql@15
```
### Check if server is running
```
brew services list
```

### Stop local postgress
```
brew services stop postgresql@15
```

### Restart services
```
brew services restart postgresql@15
```

### List of all databases
```
psql -l

```


### Create database
```
CREATE DATABASE database_name;
```


### Drop database
```
DROP DATABASE database_name;
```


### Enter psql
```
psql -U vedantlohbare -d <DATABASE>
```

### Exit psql
```
\q
```

[For more info](https://quickref.me/postgres.html/)


### View all tables in psql
```
\dt
```


### Run a local query
```
select * from "User";
```