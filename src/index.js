import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
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
      <ApprovalCard>
        <h4>warning!</h4>
        Are you sure you want to do this?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:00PM"
          postContent="nice blog post"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Peter"
          timeAgo="Yesterday at 6:00PM"
          postContent="good blog post"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Wednesday at 4:46PM"
          postContent="very informative blog post"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
