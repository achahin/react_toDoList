import { Row, Col } from "react-bootstrap";
import React, { Component } from 'react';
const Header = React.memo ( ({ title }) => 
{
  //uso el HOC react.memo.. para que solo me vuelva a renderizar el header si se cambio el props que le paso a este
  //no si se cambian los otros estados o props de  los componentes hermanos
  return (
    
    <Row>
      <Col>
        <h1 className="text-center">{title}</h1>
      </Col>
    </Row>
  );
}
);

export default Header;
