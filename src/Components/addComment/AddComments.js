import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./addComment.css";

export default function AddComments() {
  let books = useSelector((state) => state.books);
  let comments = books.map((book) => book.Comments);
  const [addcomment, setAddcomment] = useState(comments);
  const [commentContent, setCommentContent] = useState("");

  const changeComment = (e) => {
    setCommentContent(e.target.value);
  };
  const AddComment = () => {
    setAddcomment([
      ...addcomment,
      { id: Math.random(), content: commentContent },
    ]);
    setCommentContent("");
  };

  return (
    <div className="comments">
      <h6>Share your opinion with your friends about this book : </h6>

      {addcomment.map((comment) => (
        <div key={comment.id}>
          <h5>{comment.content}</h5>
        </div>
      ))}

      <div className="add-comment-bar">
        <input
          value={commentContent}
          type="text"
          onChange={changeComment}
          placeholder="share your opinion here..."
        />
        <button onClick={AddComment}>Add</button>
      </div>
    </div>
  );
}
