import "./styles.css";
import json from "./data.json";
import { useState } from "react";

const List = ({ list }) => {
  const [enabled, setEnabled] = useState(false);
  const handleChange = () => {
    setEnabled((prev) => !prev);
  };
  return (
    <div className="container">
      {list.map((res, index) => (
        <div key={index} className="parent">
          {res?.isfolder && (
            <span onClick={handleChange} className="child">
              +
            </span>
          )}
          <span>{res.name}</span>
          {enabled && res.children && <List list={res.children} />}
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const [data, setData] = useState(json);

  return (
    <div className="App">
      <h1>File Explorer</h1>
      <List list={data} />
    </div>
  );
}
