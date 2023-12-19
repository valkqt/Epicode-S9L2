import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap"

class Cardweh extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pepe: 0 };
  }

  render() {
    return (
      <Col className="d-flex justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.genre}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Cardweh;
