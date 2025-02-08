# Supabase Functions


### Create a new function
- Go in the directory you want to setup a new function
```
supabase functions new hello
```

### Deploy a function
- `projectUrlEnd` is the last identifier you find when you login to your project
```
supabase functions deploy hello --project-ref projectUrlEnd
```

### Delete a function
```
supabase functions delete hello --project-ref projectUrlEnd
```


### Local deployment
1. Would need docker for this :/