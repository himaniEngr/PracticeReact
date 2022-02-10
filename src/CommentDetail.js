import react from "react";
import reactDom from "react-dom";
// import faker from "faker";

const CommentDetail = (props) => {
  return (
    <div class="comment">
      <a class="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div class="content">
        <a class="author">{props.author}</a>
        <div class="metadata">
          <div class="date">{props.timeAgo}</div>
          <div class="rating">
            <i class="star icon"></i>5 Faves
          </div>
        </div>
        <div class="text">{props.postContent}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
