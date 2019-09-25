import { gql } from "apollo-boost";

export const GET_ORDER_SUMMARY = gql`
  query OrderSummary($id: Int!) {
    orderSummary(id: $id) {
      id
      totalOrdersCreated
      totalOrdersSettled
      totalOrdersDefaulted
      totalOrdersLiquidated
    }
  }
`;
