const { GraphQLClient } = require('graphql-request');

let graphQLClient;

function init() {
  if (graphQLClient) {
    return graphQLClient;
  }

  const endpoint = process.env.FAUNA_URL;
  const token = process.env.FAUNADB_SECRET;

  graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  return graphQLClient;
}

module.exports = {
  init
};
