# Boobielicious&reg;
![Version: 1.0.0](https://img.shields.io/badge/Version-1.0.0-informational?style=flat-square) ![AppVersion: 1.0.0](https://img.shields.io/badge/AppVersion-1.0.0-informational?style=flat-square)

Boobielicious® is a tasty tool for boob enthusiasts

## TL;DR

```console
$ helm repo add boobielicious https://boobielicious.github.io/boobielicious
$ helm install boobielicious boobielicious/boobielicious
```

## Dependencies

| Repository | Name | Version |
|------------|------|---------|
| https://bjw-s.github.io/helm-charts/ | common | 1.2.0 |

## Configuration

The following table lists the most commonly configured parameters of the Boobielicious&reg; chart and their default values:

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| env | object | `{"STASH_GRAPHQL_API":"https://stash/graphql","STASH_IMAGE_REMOTE_HOSTNAME":"stash","STASH_IMAGE_REMOTE_PORT":"9999","STASH_IMAGE_REMOTE_PROTOCOL":"https","TWITTER_BEARER_TOKEN":""}` | Environment variables. |
| env.STASH_GRAPHQL_API | string | `"https://stash/graphql"` | Stash GraphQL API endpoint |
| env.STASH_IMAGE_REMOTE_HOSTNAME | string | `"stash"` | Stash image hostname |
| env.STASH_IMAGE_REMOTE_PORT | string | `"9999"` | Stash image host port |
| env.STASH_IMAGE_REMOTE_PROTOCOL | string | `"https"` | Stash image host protocol |
| env.TWITTER_BEARER_TOKEN | string | `""` | Twitter Access Token |
| image.pullPolicy | string | `"IfNotPresent"` | image pull policy |
| image.repository | string | `"ghcr.io/boobielicious/boobielicious"` | image repository |
| image.tag | string | `"1.0.0"` | image tag |
| ingress.main | object | See values.yaml | Enable and configure ingress settings for the chart under this key. |
| ingress.main.enabled | bool | `false` | Enables or disables the ingress |
| ingress.main.hosts[0].host | string | `"chart-example.local"` | Host address. Helm template can be passed. |
| ingress.main.hosts[0].paths[0].path | string | `"/"` | Path.  Helm template can be passed. |
| ingress.main.tls | list | `[]` | Configure TLS for the ingress. Both secretName and hosts can process a Helm template. |
| service | object | See values.yaml | Configures service settings for the chart. |
| service.main.ports | object | `{"http":{"port":3000}}` | Configure the Service port information here. |
| service.main.ports.http.port | int | `3000` | The port number |
