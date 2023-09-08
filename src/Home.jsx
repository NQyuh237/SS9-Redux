import React, { useState } from "react";
import { Tabs, Tab, Container, Row } from "react-bootstrap";
import ListProduct from "./ListProduct";
import Cart from "./Cart";
function Home() {
  const [listProduct, setListProduct] = useState([
    {
      name: "KEYCAP CAPTAIN AMERICA",
      price: "100",
      description: "Chất liệu hợp kim nhôm đem lại cảm giác gõ chắc tay.",
      status: true,
      image_url:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/9246dc79-0360-45fb-83ce-0c9aa17f7549.jpg?v=1638198607840",
      count: 0,
      id: 1,
    },
    {
      name: "KEYCAP HUY HIỆU THÁCH ĐẤU",
      price: "150",
      description: "Chất liệu hợp kim nhôm đem lại cảm giác gõ chắc tay.",
      status: true,
      image_url:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/52c90dff-304b-47f6-ab5b-ec2df3355ca5.jpg?v=1637765739453",
      count: 0,
      id: 2,
    },
    {
      name: "KEYCAP LÁ CHẮN DOTA2",
      price: "200",
      description: "Chất liệu hợp kim nhôm đem lại cảm giác gõ chắc tay.",
      status: true,
      image_url:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/af142450-2044-4828-97f2-475a301f2d2c.jpg?v=1637765921440",
      count: 0,
      id: 3,
    },
    {
      name: "KEYCAP AVENGER",
      price: "400",
      description: "Chất liệu hợp kim nhôm đem lại cảm giác gõ chắc tay.",
      status: true,
      image_url:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/38adf487-7d82-4f68-970c-96ca06953d86.jpg?v=1637246853277",
      count: 0,
      id: 4,
    },
    {
      name: "KEYCAP BATMAN",
      price: "125",
      description: "Chất liệu hợp kim nhôm đem lại cảm giác gõ chắc tay.",
      status: true,
      image_url:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/02681609-cf82-40e7-bfcd-f239c94dc480.jpg?v=1631117585350",
      count: 0,
      id: 5,
    },
    {
      name: "KEYCAP CỜ ĐỎ SAO VÀNG",
      price: "250",
      description: "Chất liệu hợp kim nhôm đem lại cảm giác gõ chắc tay.",
      status: true,
      image_url:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/5578a164-31ec-4021-843a-7d9087b43a00.jpg?v=1631117477213",
      count: 0,
      id: 6,
    },
    {
      name: "KEYCAP BÚA LIỀM",
      price: "500",
      description: "Chất liệu hợp kim nhôm đem lại cảm giác gõ chắc tay.",
      status: true,
      image_url:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/c9ba104e-a67a-4ba1-9ab8-d0a30ffb5609.jpg?v=1631117399330",
      count: 0,
      id: 7,
    },
    {
      name: "KEYCAP MĂNG CỤT NHÔM",
      price: "450",
      description: "Chất liệu hợp kim nhôm đem lại cảm giác gõ chắc tay.",
      status: true,
      image_url:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/dda1dfee-525a-45f3-879c-797bb68e62cb.jpg?v=1631117319237",
      count: 0,
      id: 8,
    },
    {
      name: "KEYCAP KIẾM DOTA",
      price: "290",
      description: "Chất liệu hợp kim nhôm đem lại cảm giác gõ chắc tay.",
      status: true,
      image_url:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/026da6fe-98c0-4ce2-831c-008f2db894ac.jpg?v=1631116774293",
      count: 0,
      id: 9,
    },
    {
      name: "KEYCAP DAO BLINK DOTA",
      price: "350",
      description: "Chất liệu hợp kim nhôm đem lại cảm giác gõ chắc tay.",
      status: true,
      image_url:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/48e5ad17-cc00-471f-b011-51b236dec936.jpg?v=1631116694247",
      count: 0,
      id: 10,
    },
  ]);
  
  const [key, setKey] = useState("home");

  const handleAddCart = (id, count) => {
    setListProduct((prevList) => {
      return prevList.map((item) => {
        if (item.id === id) {
          return { ...item, count };
        }
        return item;
      });
    });
  };

  const handleUpdate = (id, count) => {
    console.log(id, count);
  };

  const handleDelete = (id) => {
    setListProduct((prevList) => {
      return prevList.map((item) => {
        if (item.id === id) {
          return { ...item, count: 0 };
        }
        return item;
      });
    });
  };

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <Container>
          <h1 className="text-center">Shopping Cart</h1>
          <Row className="product-row">
            {listProduct.map((productItem) => (
              <ListProduct
                product={productItem}
                key={productItem.id}
                onAddCart={handleAddCart}
              />
            ))}
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="cart" title="Cart">
        <Cart
          listProduct={listProduct}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </Tab>
    </Tabs>
  );
}

export default Home;
