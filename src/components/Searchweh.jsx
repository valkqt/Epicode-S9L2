import React from "react";

class Searchweh extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({...this.state, searchText: e.target.value})
  }

  handleSubmit(e) {

  }

  render() {
    return (
      <Form onSubmit={e => e}>
        <Form.Group>
          <Form.Label htmlFor="search">Search:</Form.Label>
          <Form.Control type="search" placeholder="write some stuff" id="search" name="search" onChange={(e) => this.handleChange(e)}/>
        </Form.Group>
        <Button type="submit">Search</Button>
      </Form>
    );
  }
}

export default Searchweh;
