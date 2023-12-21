import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Button } from "react-bootstrap";
import css from "./css/Cardweh.module.css";

class Cardweh extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false, comments: [] };
    this.toggleSelection = this.toggleSelection.bind(this);
    this.pepe = this.pepe.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  toggleSelection(e) {
    this.setState({
      ...this.state,
      selected: !this.state.selected,
    });
  }

  pepe() {
    const endpoint = `https://striveschool-api.herokuapp.com/api/books/${this.props.asin}/comments`;

    fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDZkY2I1MjViYjAwMThlZDA4MTAiLCJpYXQiOjE3MDMxNjc3MDgsImV4cCI6MTcwNDM3NzMwOH0.l4fV6snHiO-tkwpEqB097J3Iz9Oq0FclCxXsVKE_6aw",
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ ...this.state, comments: data });
      });
  }

  addComment() {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDZkY2I1MjViYjAwMThlZDA4MTAiLCJpYXQiOjE3MDMxNjc3MDgsImV4cCI6MTcwNDM3NzMwOH0.l4fV6snHiO-tkwpEqB097J3Iz9Oq0FclCxXsVKE_6aw",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        comment: "pepe",
        rate: "3",
        elementId: `${this.props.asin}`,
      }),
    });
  }

  deleteComment(sid) {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${sid}`, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDZkY2I1MjViYjAwMThlZDA4MTAiLCJpYXQiOjE3MDMxNjc3MDgsImV4cCI6MTcwNDM3NzMwOH0.l4fV6snHiO-tkwpEqB097J3Iz9Oq0FclCxXsVKE_6aw",
        "Content-type": "application/json",
      },
    }).then(() => {
      const commentArr = this.state.comments;
      console.log(this.state.comments);

      commentArr.splice(
        commentArr.findIndex((c) => c._id === sid),
        1
      );
      this.state = { ...this.state, comments: this.state.comments };
    });
  }

  render() {
    const cardClass = this.state.selected ? css.selected : undefined;
    return (
      <Col className="d-flex justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Body
            className={cardClass}
            onClick={(e) => {
              this.toggleSelection(e);
              this.pepe();
            }}
          >
            <Card.Img variant="top" src={this.props.img} />

            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.genre}</Card.Text>
            <Button
              className="btn btn-info text-white"
              onClick={this.addComment}
            >
              Add Comment
            </Button>
            <hr />
          </Card.Body>
          <Card.Footer>
            {this.state.comments
              .map((comment) => (
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p>{comment.comment}</p>
                  </div>
                  <div>
                    <p className="display-6">{comment.rate}</p>
                    <Button
                      className="btn btn-danger"
                      onClick={this.deleteComment(comment._id)}
                    >
                      X
                    </Button>
                  </div>
                </div>
              ))
              .slice(0, 5)}
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

export default Cardweh;
