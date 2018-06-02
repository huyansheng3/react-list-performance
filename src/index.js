import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { times } from "lodash";

const items = times(1000, i => ({ id: i, label: i, checked: false }));

console.log(items);

class App extends React.Component {
  handleClick = id => {};

  render() {
    return (
      <ul>
        {items.map(item => {
          return (
            <li
              key={item.id}
              style={{ backgroundColor: item.checked ? "blue" : null }}
              onClick={e => this.handleClick(item.id)}
            >
              {item.label}{" "}
            </li>
          );
        })}
      </ul>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("container")
);
