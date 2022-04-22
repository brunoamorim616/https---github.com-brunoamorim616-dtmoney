import React from "react";
import ReactDOM from "react-dom";
import { createServer } from "miragejs";
import App from "./App";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return {
        data: [
          {
            hashcod: 1,
            title: "Software Development",
            amount: 20000,
            description: "Development",
            type: "deposit",
            register_date: new Date(),
          },
          {
            hashcod: 2,
            title: "Software license",
            amount: 200,
            description: "Development",
            type: "withdraw",
            register_date: new Date(),
          },
        ],
      };
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
