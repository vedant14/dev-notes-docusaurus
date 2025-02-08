### URL FORMAT
```
DATABASE_URL="postgresql://vedantlohbare:<password>@localhost:5432/<DATABASE>?schema=SCHEMA"
```

### Start server
```
brew services start postgresql@15
```

### Perform migration
- The name can be changed
```
npx prisma migrate dev --name add_name_email_to_user
```

### Run studio
```
npx prisma studio
```

### On Production

```
https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-22-04
```