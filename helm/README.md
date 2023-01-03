# Boobielicious&reg;
![Version: 1.4.0](https://img.shields.io/badge/Version-1.4.0-informational?style=flat-square) ![AppVersion: 1.4.0](https://img.shields.io/badge/AppVersion-1.4.0-informational?style=flat-square)

Boobielicious® is a tasty tool for boob enthusiasts

## TL;DR

```console
$ helm repo add boobielicious https://boobielicious.github.io/boobielicious
$ helm install boobielicious boobielicious/boobielicious
```

## Dependencies

| Repository | Name | Version |
|------------|------|---------|
| https://bjw-s.github.io/helm-charts/ | common | 1.2.1 |
| https://charts.bitnami.com/bitnami | postgresql | 12.1.6 |

## Configuration

The following table lists the most commonly configured parameters of the Boobielicious&reg; chart and their default values:

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| env | object | `{"NZBGET_JSONRPC_API":"http://nzbget:6789/jsonrpc","NZBGET_PASSWORD":"","NZBGET_USERNAME":"","NZBHYDRA_API_KEY":"","NZBHYDRA_ENDPOINT":"http://nzbhydra2:5076","STASH_GRAPHQL_API":"http://stash:9999/graphql","STASH_IMAGE_REMOTE_HOSTNAME":"stash","STASH_IMAGE_REMOTE_PORT":"9999","STASH_IMAGE_REMOTE_PROTOCOL":"https","TWITTER_BEARER_TOKEN":""}` | Environment variables. |
| env.NZBGET_JSONRPC_API | string | `"http://nzbget:6789/jsonrpc"` | NZBGet JSON-RPC URL |
| env.NZBGET_PASSWORD | string | `""` | NZBGet password |
| env.NZBGET_USERNAME | string | `""` | NZBGet user |
| env.NZBHYDRA_API_KEY | string | `""` | NZBHydra2 API key |
| env.NZBHYDRA_ENDPOINT | string | `"http://nzbhydra2:5076"` | NZBHydra2 API endpoint |
| env.STASH_GRAPHQL_API | string | `"http://stash:9999/graphql"` | Stash GraphQL API endpoint |
| env.STASH_IMAGE_REMOTE_HOSTNAME | string | `"stash"` | Stash image hostname |
| env.STASH_IMAGE_REMOTE_PORT | string | `"9999"` | Stash image host port |
| env.STASH_IMAGE_REMOTE_PROTOCOL | string | `"https"` | Stash image host protocol |
| env.TWITTER_BEARER_TOKEN | string | `""` | Twitter Access Token |
| image.pullPolicy | string | `"IfNotPresent"` | image pull policy |
| image.repository | string | `"ghcr.io/boobielicious/boobielicious"` | image repository |
| image.tag | string | `"1.3.1"` | image tag |
| ingress.main | object | See values.yaml | Enable and configure ingress settings for the chart under this key. |
| ingress.main.enabled | bool | `false` | Enables or disables the ingress |
| ingress.main.hosts[0].host | string | `"chart-example.local"` | Host address. Helm template can be passed. |
| ingress.main.hosts[0].paths[0].path | string | `"/"` | Path.  Helm template can be passed. |
| ingress.main.tls | list | `[]` | Configure TLS for the ingress. Both secretName and hosts can process a Helm template. |
| postgresql | object | See values.yaml | Enable and configure postgresql database subchart under this key.    For more options see [postgresql chart documentation](https://github.com/bitnami/charts/tree/master/bitnami/postgresql) |
| service | object | See values.yaml | Configures service settings for the chart. |
| service.main.ports | object | `{"http":{"port":3000}}` | Configure the Service port information here. |
| service.main.ports.http.port | int | `3000` | The port number |
