const { gql } = require('graphql-request');

module.exports = gql`
  query GetTotalVisits {
    totalVisits {
      _id
      total
    }
  }
`;
