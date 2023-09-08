import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

function Cart({ listProduct, handleUpdate, handleDelete }) {
  const [cartList, setCartList] = useState([]);
  const [newCounts, setNewCounts] = useState({});

  useEffect(() => {
    if (Array.isArray(listProduct)) {
      setCartList(listProduct.filter((item) => item.count > 0));
    }
  }, [listProduct]);

  const total = cartList.reduce(
    (total, cur) => total + cur.count * cur.price,
    0
  );

  const handleUpdateCart = (id) => {
    const updatedCount = newCounts[id];
    if (updatedCount !== undefined) {
      handleUpdate(id, updatedCount);
    }

    let newList = [...cartList];
    let item = newList.find((item) => item.id === id);
    item.status = !item.status;

    if (item.status) {
      item.count = updatedCount || item.count;
    }

    setCartList(newList);
  };

  const handleDeleteCart = (id) => {
    handleDelete(id);
  };

  return (
    <Container>
      <h1 className="text-center">Cart</h1>
      <Table striped bordered hover style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>IMAGE</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>TotalAmount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td style={{ width: "600px" }}>{item.name}</td>
              <td>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={item.image_url}
                  alt=""
                />
              </td>
              <td>
                {item.status ? (
                  item.count
                ) : (
                  <input
                    type="number"
                    value={newCounts[item.id] || item.count}
                    style={{ width: "50px" }}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      setNewCounts((prevCounts) => ({
                        ...prevCounts,
                        [item.id]: value,
                      }));
                    }}
                  />
                )}
              </td>
              <td>{item.price}$</td>
              <td>{item.count * item.price}</td>
              <td>
                <Button
                  variant="warning"
                  className="mx-2"
                  onClick={() => handleUpdateCart(item.id)}
                >
                  Update
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteCart(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
          <tr className="">
            <td colSpan={7} className="text-center fw-bold">
              Tổng tiền: {total}$
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
