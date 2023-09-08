import React, { useState } from "react";
import { Col, Card, Button } from "react-bootstrap";

function ListProduct({ product, onAddCart }) {
  if (!product) {
    return <div>No product data available.</div>;
  }

  const { name, price, description, image_url, id } = product;
  const [count, setCount] = useState(0);

  const handleChangeCount = (e) => {
    const newValue = e.target.value;
    setCount(newValue >= 0 ? newValue : 0);
  };

  const handleAdd = () => {
    onAddCart(id, count);
    setCount(0);
  };

  return (
    <Col lg={4} md={4} sm={6} className="my-4">
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text
            style={{
              maxHeight: "2.4rem",
              lineHeight: "1.2rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Card.Text>
          <p className="price fs-5 " style={{ fontWeight: "bold" }}>
            {price}$
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <input
              type="number"
              placeholder="0"
              value={count}
              min="0"
              style={{ width: "80px", height: "35px" }}
              onChange={handleChangeCount}
            />
            <Button
              variant="primary"
              onClick={handleAdd}
              disabled={count === 0}
            >
              Add to cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ListProduct;
