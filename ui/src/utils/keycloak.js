import Keycloak from 'keycloak-js'
import { keycloakCredentials } from '../settings'

var keycloak = new Keycloak({
   url: keycloakCredentials.url,
   realm: keycloakCredentials.realm,
   clientId: keycloakCredentials.clientId
})

export default keycloak