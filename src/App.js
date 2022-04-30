import React from "react";
import { TagCloud } from "react-tagcloud";
import "./App.css";
import data from './data/data.json'

function App() {
  return (
    <main>
      <TagCloud
        minSize={12}
        maxSize={100}
        tags={data}
        disableRandomColor
        onClick={(tag) => alert(`'${tag.value}' was selected!`)}
      />
    </main>
  );
}

export default App;
