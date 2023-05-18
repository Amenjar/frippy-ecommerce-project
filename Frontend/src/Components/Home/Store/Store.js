import React from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from "../data/storeItems.json"
import StoreItem from "./StoreItem";
const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row>
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;