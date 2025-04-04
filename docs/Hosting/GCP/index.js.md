## Setting up GCP
- Create a GCP instance. I am creating a e2 micro
- Allow HTTPS / HTTP.
- Open SSH
```
sudo passwd root  
# Input your new password  
# Confirm new password  
# Verify password by login  
su root  
# Input your new password
```
- Firewall policies have to be configured (TO be added)
## Installing libaries

### Postgresql
```
sudo apt update && sudo apt install -y postgresql postgresql-contrib
```

```
sudo systemctl status postgresql
```

- Login to postgresql
```
sudo -u postgres psql -d financedb
```

```
ALTER USER postgres PASSWORD 'your-secure-password';
\q
```
### Install Node

- I am installing node v.20.x
```
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

### Nginx
```
sudo apt install -y nginx
```

- You can check Nginx configuration
```
sudo nano /etc/nginx/sites-available/default
```

```
server {
        listen 80 default_server;
        listen [::]:80 default_server;
        root /var/www/html;
        index index.html index.htm index.nginx-debian.html;
        server_name _;
        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
        }
}
```

```
sudo systemctl restart nginx
```

- Verify Nginx
```
sudo nginx -t
```
- Check by going to the public IP OR
```
netstat -tulnp | grep LISTEN
```

### Installing Bun
- First install unzip
```
sudo apt install -y unzip
```

```
curl -fsSL https://bun.sh/install | bash
```

```
source ~/.bashrc
```

### Installing pm2

```
bun install -g pm2
```


## Connecting to Github

```
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
```

```
cat ~/.ssh/id_rsa.pub
```

- Go to [keys](https://github.com/settings/keys) and paste your SSH keys
- Run the following 
```
ssh -T git@github.com
```

```
sudo apt update && sudo apt install -y git
```

## Starting the app

### Clone the repo
- Clone your git repository on gcp vm.
```
git clone gitsshurl
```

- cd into your app and edit environment 
```
touch .env && nano .env
```

- Build server files
```
bun run build
```
### Start server
```
pm2 start "bun run start" --name "my-app"
```
- Check if the pm2 is running by 
```
pm2 list
```
- Run this just
```
pm2 save  
pm2 startup
```

### Configure Nginx
- Create a new file
```
sudo nano /etc/nginx/sites-available/my-app
```

- Copy something like this
```
server {
    listen 80;
    server_name YOUR_GCP_IP;

    location / {
        proxy_pass http://localhost:3000;  # Change 3000 if needed
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

```
- Save and exit (`CTRL + X`, then `Y`, then `Enter`).
- Enable the config and restart nginx
```
sudo ln -s /etc/nginx/sites-available/my-app /etc/nginx/sites-enabled/
sudo nginx -t  # Test for syntax errors
sudo systemctl restart nginx
```

- Check if your app is running
```
ss -tlnp | grep node
```

### Domain
- Go to your **domain registrar** (GoDaddy, Namecheap, Cloudflare, etc.) and:
- Add an **A record** pointing your domain to for your IP
    - **Type:** A
    - **Name:** `@` (or `yourdomain.com`) or subdomain
    - **Value:** `GCP_IP`
    - **TTL:** `Auto` or `3600 seconds`
- Check if changes are done by running on your local terminal
```
ping yourdomain.com
```

- Update the domain
```
sudo nano /etc/nginx/sites-available/my-app
```

```
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
- Don't add yourdomain.com if you only want to run on a subdomain
- Restart Nginx
```
sudo systemctl restart nginx
```
### HTTPS 
- install certbot
```
sudo apt install certbot python3-certbot-nginx -y
```

- Then **run Certbot**:

```
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

- It will ask for an **email** (for renewal reminders).
- Agree to the terms.
- Choose `2: Redirect` to force HTTPS.
- If successful, it will say: `Congratulations! Your certificate has been issued.`
- Ensure Certbot auto-renews your SSL before expiration:
```
sudo systemctl enable certbot.timer
```

- Manually test renewal:
```
sudo certbot renew --dry-run
```
- Verify by going to your site

## Setting up cron

```
crontab -e
```
- Add your cron like this
```
0 * * * * /usr/bin/node /home/path-to-project/app/jobs/cron.js >> /home/user/logs/cron-info.log 2>&1
```
- Restart cron file
```
sudo systemctl restart cron
```
- To check if it is running
```
crontab -l
```
- Check log files
```
cat /home/user/logs/cron-info.log
```

## Debugging

### Check if NGINX is Running

```
sudo systemctl status nginx
```

It should show **"active (running)"**
### Check NGINX Error Logs

```
sudo journalctl -u nginx --no-pager --lines=50
```
### Check Open Ports

```
sudo netstat -tulnp | grep nginx
```
- You should see something listening on **port 80**.
### Verify Your Nginx Config is Enabled

- Make sure your custom config (`my-app`) is **symlinked** in `sites-enabled`:

```
ls -l /etc/nginx/sites-enabled/
```

- You should see:
```
/etc/nginx/sites-enabled/my-app -> /etc/nginx/sites-available/my-app
```
- If **it’s missing**, create the symlink again:
```
sudo ln -s /etc/nginx/sites-available/finance-app /etc/nginx/sites-enabled/ 
sudo systemctl restart nginx
```