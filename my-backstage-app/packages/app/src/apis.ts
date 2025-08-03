import {
  ScmIntegrationsApi,
  scmIntegrationsApiRef,
  ScmAuth,
  scmAuthApiRef,
} from '@backstage/integration-react';
import {
  AnyApiFactory,
  ApiRef,
  configApiRef,
  createApiFactory,
  createApiRef,
  discoveryApiRef,
  githubAuthApiRef,
  gitlabAuthApiRef,
  OAuthApi,
  oauthRequestApiRef,
  ProfileInfoApi,
  SessionApi,
} from '@backstage/core-plugin-api';
import { GithubAuth } from '@backstage/core-app-api';

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
  ScmAuth.createDefaultApiFactory(),
];

// createApiFactory({
//   api: scmAuthApiRef,
//   deps: {
//     gitlabAuthApi: gitlabAuthApiRef
//   },
//   factory: ({gitlabAuthApi}) => ScmAuth.forGitlab(gitlabAuthApi),
// })

// createApiFactory({
//   api: scmAuthApiRef,
//   deps: {
//     githubAuthApi: githubAuthApiRef
//   },
//   factory: ({githubAuthApi}) => ScmAuth.forGithub(githubAuthApi),
// })

// const gheAuthApiRef: ApiRef<OAuthApi & ProfileInfoApi & SessionApi> = 
//   createApiRef({
//     id: 'internal.auth.ghe'
//   });

// createApiFactory({
//   api: gheAuthApiRef,
//   deps: {
//     discoveryApi: discoveryApiRef,
//     oauthRequestApi: oauthRequestApiRef,
//     configApi: configApiRef
//   },
//   factory: ({ discoveryApi, oauthRequestApi, configApi}) => 
//       GithubAuth.create({
//         configApi,
//         discoveryApi,
//         oauthRequestApi,
//         provider: { id: 'ghe', title: 'Github Enterprise', icon: () => null },
//         defaultScopes: ['read:user'],
//         environment: configApi.getOptionalString('auth.environment'),
//       })
// })

// createApiFactory({
//   api: scmAuthApiRef,
//   deps: {
//     gheAuthApi: gheAuthApiRef,
//     githubAuthApi: githubAuthApiRef,
//   },
//   factory: ({githubAuthApi, gheAuthApi}) => 
//     ScmAuth.merge(
//       ScmAuth.forGithub(githubAuthApi),
//       ScmAuth.forGithub(gheAuthApi, { host: 'ghe.example.com' })
//     )
// })



// import {providers} from '@backstage/plugin-auth-backend';

// providerFactories: {
//   ghe: providers.github.create(),
// }