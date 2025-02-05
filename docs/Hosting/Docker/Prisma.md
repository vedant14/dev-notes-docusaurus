## For Sqlite
- SSH into your EC2 instance and create a persistent folder for the SQLite database:

```
mkdir -p /home/ubuntu/sqlite-data 
chmod 777 /home/ubuntu/sqlite-data  # Ensure write permissions
```

- Use this as the file. Paste as it in `.env`
```
file:/app/db/dev.db
```

- Modify your docker run
```
docker run -d -p 3000:3000 \
  -v /home/ubuntu/sqlite-data:/app/db \
  --env-file .env \
  --name my-app my-app-image
```

### Upload backup to S3
```
aws s3 cp /home/ubuntu/sqlite-data/dev.db s3://your-bucket/sqlite-backups/dev-$(date +%F).db
```

- Restore backup
```
aws s3 cp s3://your-bucket/sqlite-backups/dev-latest.db /home/ubuntu/sqlite-data/dev.db
```




## Initiate Prisma

```
docker exec -it goals sh
```


```
npx prisma migrate deploy
```

### If you're using SQLite and don't have migrations yet, create one:

```
npx prisma migrate dev --name init
```

### Restart the container
- Name of the container, here it is goals
```
docker stop goals
docker rm goals
docker run -d -p 3000:3000 \
  -v /home/ubuntu/sqlite-data:/app/db \
  --env-file .env \
  --name goals goals-image

```

