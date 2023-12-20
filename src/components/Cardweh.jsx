import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap"
import css from "./css/Cardweh.module.css"

class Cardweh extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
    this.toggleSelection = this.toggleSelection.bind(this)
  }

  toggleSelection(e) {
    this.setState({
      ...this.state,
      selected: !this.state.selected
    })
  }

  render() {
    const cardClass = this.state.selected ? css.selected : undefined;
    return (
      <Col className="d-flex justify-content-center">
        <Card className={cardClass} style={{ width: "18rem" }} onClick={e =>{this.toggleSelection(e)}}>
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
