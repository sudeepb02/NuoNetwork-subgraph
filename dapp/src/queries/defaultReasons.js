import { gql } from "apollo-boost";

export const GET_DEFAULT_REASONS = gql`
  query DefaultReasons {
    logOrderDefaulteds (first: 1000) {
      id
      reason
    }
  }
`;
