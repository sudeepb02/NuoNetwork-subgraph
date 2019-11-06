import { gql } from "apollo-boost";

export const GET_USER_ANALYSIS = gql`
  query UserAnalysis($id: ID!) {
    user(id: $id) {
      totalOrdersCreated
      totalOrdersSettled
      totalOrdersDefaulted
      totalOrdersLiquidated
      id
    }
  }
`;
