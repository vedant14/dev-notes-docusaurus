## Install Certbot & SSL Dependencies

- Run the following commands on your Ubuntu server:

```
sudo apt update sudo apt install certbot python3-certbot-nginx -y
```
`
## Obtain an SSL Certificate

- Run this command to automatically configure SSL for your domain with Nginx:
- If it asks for an email, provide one.
- Agree to the terms and choose **option 2** (Redirect all HTTP to HTTPS).

```
sudo certbot --nginx -d app.celebrate-anjali-vedant.life
```

## Step 3: Verify SSL Configuration

- Check if your SSL certificate is correctly installed:

```
sudo nginx -t
```

- If the output says `syntax is okay` restart Nginx:

```
sudo systemctl restart nginx
```

## **Set Up Auto-Renewal (Recommended)**

- Let's Encrypt certificates expire every 90 days. To renew them automatically, run:
```
sudo certbot renew --dry-run
```
- If everything works fine, Certbot will renew your certificate automatically.
