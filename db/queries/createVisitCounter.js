const { gql } = require('graphql-request');

module.exports = gql`
  mutation CreateVisitCounter {
    createVisitCount(data: { total: 0 }) {
      total
    }
  }
`;
