import React from "react";
import "./styles.css";

let data = [1, 2, 4, 6, 4, 3, 2];

function compare(data) {
  let length = data.length;
  for (i = 0; i < length; i++) {
    for (x = i + 1; x < length; x++) {
      if (data[i] === data[x]) {
        return data[i];
      }
    }
  }
  return undefined;
}

//O(n^2)

function compare2(data) {
  let map = {};
  for (let i = 0; i < data.length; i++) {
    if (map[data[i]] !== undefined) {
      return data[i];
    } else {
      map[data[i]] = i;
    }
    console.log(map);
  }
  return undefined;
}

//O(n)

export default function App() {
  return <div className="App">{compare2(data)}</div>;
}
