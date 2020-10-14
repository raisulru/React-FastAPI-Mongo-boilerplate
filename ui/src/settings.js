export const apiBaseURL = {
    v1: process.env.REACT_APP_API_BASE_URL,
  };
export const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID

export const keycloakCredentials = {
  url: process.env.REACT_APP_KEYCLOAK_AUTH_URL,
  realm: process.env.REACT_APP_KEYCLOAK_REALM,
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID
}