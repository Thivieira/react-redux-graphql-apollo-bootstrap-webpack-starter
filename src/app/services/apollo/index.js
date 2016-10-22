import ApolloClient, {
  createNetworkInterface,
  addTypename
}                       from 'apollo-client';
import { appConfig }    from '../../config';

export const client = new ApolloClient({
  networkInterface: createNetworkInterface(appConfig.apollo.networkInterface),
  queryTransformer: addTypename
});
