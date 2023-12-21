import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navweh from "./components/Navweh";
import JumboWeh from "./components/Jumboweh";
import Footweh from "./components/Footweh";
import Cardweh from "./components/Cardweh";
import { Container } from "react-bootstrap";
import data from "./data/books.json";
import "bootstrap/dist/css/bootstrap.min.css";

// a volte compariranno elementi duplicati. ci sono chiavi duplicate nel database

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ ...this.state, searchText: e.target.value });
  }

  render() {
    const genre = window.location.pathname.split("/").pop();
    const selectedBooks = data[genre || "fantasy"].filter((book) =>
      book.title.includes(this.state.searchText)
    );
    return (
      <Container fluid className="bg-secondary-subtle">
        <Navweh
          searchText={this.state.searchText}
          onSearchChange={this.handleChange}
        />

        <Container className="bg-body-tertiary">
          <JumboWeh />
          <main className="row-cols-2 row-cols-md-3 row gy-5 p-3">
            {selectedBooks.map((book) => {
              return (
                <Cardweh key={book.asin} img={book.img} title={book.title} asin={book.asin} />
              );
            })}
          </main>
        </Container>
        <Footweh />
      </Container>
    );
  }
}

function pass() {
  return;
}

function random(n) {
  return Math.floor(Math.random() * n);
}

function randomizer(array, n) {
  const arr = [];

  while (arr.length < n) {
    if (!arr.includes(array[random(array.length)])) {
      arr.push(array[random(array.length)]);
    }
  }
  return arr;
}

function genreRandomizer(array) {
  return Object.keys(array)[random(Object.keys(array).length)];
}


export default App;
