import { gql } from "apollo-boost";

export const GET_ORDER_CREATEDS = gql`
  query OrderCreateds {
    logOrderCreateds (first: 1000) {
      collateralToken
    }
  }
`;