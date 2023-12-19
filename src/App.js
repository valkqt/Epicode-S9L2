import logo from "./logo.svg";
import "./App.css";
import Navweh from "./components/Navweh";
import JumboWeh from "./components/Jumboweh";
import Footweh from "./components/Footweh";
import Cardweh from "./components/Cardweh";
import { Container } from "react-bootstrap";
import data from "./data/books.json";
import "bootstrap/dist/css/bootstrap.min.css";

// a volte compariranno elementi duplicati. ci sono chiavi duplicate nel database

const selectedBooks = randomizer(data[genreRandomizer(data)], 12)

function App() {
  return (
    <Container fluid className="bg-secondary-subtle">
      <Navweh />
      <Container className="bg-body-tertiary">
        <JumboWeh />
        <div className="row-cols-2 row-cols-md-3 row gy-5 p-3">
          {selectedBooks.map((book) => {
            return (
              <Cardweh key={book.asin} img={book.img} title={book.title} />
            );
          })}
        </div>
      </Container>
      <Footweh />
    </Container>
  );
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
