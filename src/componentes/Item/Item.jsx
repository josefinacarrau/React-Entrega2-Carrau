import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Item = ({ id, titulo, precio, imagen }) => {
  return (
    <>
    <Row md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card className="text-center cardProductos">
            <Card.Img
              variant="top"
              className="imgProducto"
              src={imagen}
              alt={titulo}
            />
            <Card.Body>
              <Card.Title>{titulo}</Card.Title>
              <Card.Text>
                Precio: {precio}
              </Card.Text>
              <Link to={`/item/${id}`}>
                <Button variant="info" className="btnCarrito">
                  Ver Detalles
                </Button>{" "}
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
};

export default Item;
