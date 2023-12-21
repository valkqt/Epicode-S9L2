import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



// fetch("https://striveschool-api.herokuapp.com/api/comments/", {
//   method: "POST",
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDZkY2I1MjViYjAwMThlZDA4MTAiLCJpYXQiOjE3MDMxNjc3MDgsImV4cCI6MTcwNDM3NzMwOH0.l4fV6snHiO-tkwpEqB097J3Iz9Oq0FclCxXsVKE_6aw",
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({ comment: "pepe", rate: "3", elementId: "0316389706" }),
// });

const endpoint =
  "https://striveschool-api.herokuapp.com/api/books/0316389706/comments";

async function weh() {
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDZkY2I1MjViYjAwMThlZDA4MTAiLCJpYXQiOjE3MDMxNjc3MDgsImV4cCI6MTcwNDM3NzMwOH0.l4fV6snHiO-tkwpEqB097J3Iz9Oq0FclCxXsVKE_6aw",
      "Content-type": "application/json",
    },
  })
  const data = await response.json()
  console.log(data)
}


reportWebVitals();
