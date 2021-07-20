# Tim Mouskhelichvili's Personal Website

Here is the full source code of the [Tim Mouskhelichvili](https://timmouskhelichvili.com) website.

#### How to serve thought docker.
```console
docker build -t timmouskhelichvili .
docker run --restart=always -d 3000:3000 timmouskhelichvili
```