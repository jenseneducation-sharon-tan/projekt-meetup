# project-meetup

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Dockerize vue app

```
docker build -t project-meetup .

docker run -it -p 8020:8080 --rm --name dockerize-project-mu project-meetup
```

### Push an existing docker image to Heroku

```
heroku container:login

docker tag project-meetup registry.heroku.com/dockerize-meetup-sharon/web

docker push registry.heroku.com/dockerize-meetup-sharon/web

heroku container:release --app dockerize-meetup-sharon web
```
