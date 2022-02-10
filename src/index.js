import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
// import faker from "faker";
// import App from './components/App';
function getText() {
  return "hi there";
}
const buttonText = { text: "click me" };
const style = { backgroundColor: "blue", color: "white" };
const App = () => {
  return (
    // <div>
    //   <button style={style}>{buttonText.text}</button>
    //   {getText()}
    // </div>
    <div class="ui container comments">
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
