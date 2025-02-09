# Docker
- Containers to launch applications, if you want to control the dev environment. 
- For my applications it was probably not required, we did it anyhow
- You can use docker compose if you want to run boot 2 applications simultaneously. 


## To create docker image
- locally
```
docker build -t image-name .
docker run -p 3000:3000 image-name
```


### To check if docker is running
```
systemctl is-active docker
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




### Prune 
```
docker image prune -f
```