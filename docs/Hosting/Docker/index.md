# Docker
- If I understand it correctly, you create docker images and then run them in containers.
- Containers to launch applications, if you want to control the dev environment. 
- For my applications it was probably not required, we did it anyhow
- You can use docker compose if you want to run boot 2 applications simultaneously. 

## Images

### Create an image
- locally
```
docker build -t image-name .
```

### Check images
```
docker images
```

### Delete particular image
```
docker rmi <imageid>
```

### Delete all local images
```
docker rmi -f $(docker images -aq)
```
### Prune dangling images
```
docker image prune -f
```
### To check if docker is running
```
systemctl is-active docker
```


## Containers
### To run a container
```
docker run -p 3000:3000 image-name
```
### To get running docker containers
```
docker ps
```

### **Stop & Remove the Existing Container**

- Since environment variables are loaded when the container starts, you need to restart your container.

```
docker stop container-name
docker rm container-name
```

- If you’re unsure about the container name, check running containers with:

### To print env variables
```
docker exec -it goals env
```


### To get the logs
```
docker logs --tail=50 goals
```



