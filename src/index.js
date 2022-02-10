import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
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
      <div class="comment">
        <a class="avatar">
          <img alt="avatar" src={faker.image.image()} />
        </a>
        <div class="content">
          <a class="author">Stevie Feliciano</a>
          <div class="metadata">
            <div class="date">2 days ago</div>
            <div class="rating">
              <i class="star icon"></i>5 Faves
            </div>
          </div>
          <div class="text">
            Hey guys, I hope this example comment is helping you read this
            documentation.
          </div>
        </div>
      </div>
      <div class="comment">
        <a class="avatar">
          <img alt="avatar" src={faker.image.image()} />
        </a>
        <div class="content">
          <a class="author">Stevie Feliciano</a>
          <div class="metadata">
            <div class="date">2 days ago</div>
            <div class="rating">
              <i class="star icon"></i>5 Faves
            </div>
          </div>
          <div class="text">
            Hey guys, I hope this example comment is helping you read this
            documentation.
          </div>
        </div>
      </div>
      <div class="comment">
        <a class="avatar">
          <img alt="avatar" src={faker.image.image()} />
        </a>
        <div class="content">
          <a class="author">Stevie Feliciano</a>
          <div class="metadata">
            <div class="date">2 days ago</div>
            <div class="rating">
              <i class="star icon"></i>5 Faves
            </div>
          </div>
          <div class="text">
            Hey guys, I hope this example comment is helping you read this
            documentation.
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
