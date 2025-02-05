## To make port 3000 to default
- Install Nginx
```
sudo apt update && sudo apt install -y nginx
```
- Edit config
```
sudo nano /etc/nginx/sites-available/default
```

- Add the following code
```
server {
    listen 80;
    server_name app.celebrate-anjali-vedant.life;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

```

- Restart
```
sudo systemctl daemon-reload
sudo systemctl restart nginx
```