# Docker

## Images

- Images auflisten: `docker image ls`
- Image löschen: `docker rmi <image>`
- Unbenutzte Images löschen: `docker image prune`
  - alle: `docker image prune -a`
  - ohne Nachfrage: `docker image prune -a -f`

## Container

- Container auflisten
  - Laufende Container auflisten: `docker ps`
  - Auch gestoppte Container auflisten: `docker ps -a`
- Container entfernen: `docker rm <name>`
- Container betreten: `docker exec -it <name> bash`
- Restart Policy ändern: `docker update --restart=unless-stopped <name>`

## Docker Compose

- Aktualisieren:
  - `docker-compose pull`
  - `docker-compose build --no-cache`
  - `docker-compose up -d --force-recreate`

## Portainer

- [www.portainer.io](https://www.portainer.io/)
- https://hub.docker.com/r/portainer/portainer|hub.docker.com/r/portainer/portainer

```sh
docker run \
    --name portainer \
    -d \
    --restart unless-stopped \
    -p 127.0.0.1:9000:9000 \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /srv/portainer/data:/data \
    portainer/portainer
```

Zugang mit
``` sh
ssh -L 9001:127.0.0.1:9000 user@server
```
