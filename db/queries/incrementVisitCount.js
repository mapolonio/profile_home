const { gql } = require('graphql-request');

module.exports = (id, newCount) => gql`
  mutation IncrementVisits {
    updateVisitCount(id: ${id}, data: { total: ${newCount} }) {
      total
    }
  }
`;
