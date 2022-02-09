import React from "react";
import ReactDOM from "react-dom";
// import App from './components/App';
function getText() {
  return "hi there";
}
const buttonText = { text: "click me" };
const style = { backgroundColor: "blue", color: "white" };
const App = () => {
  return (
    <div>
      <button style={style}>{buttonText.text}</button>
      {getText()}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
