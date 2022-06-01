import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {isCurrentlyRead,wantToRead,isRead} from "../../Redux/Actions/actions";
import "./bookCard.css";

export default function BookCard({ book }) {
  let dispatch = useDispatch();

  const handleClick1 = () => {
    dispatch(isCurrentlyRead(book.id));
  };
  const handleClick2 = () => {
    dispatch(wantToRead(book.id));
  };
  const handleClick3 = () => {
    dispatch(isRead(book.id));
  };

  return (
    <div className="book-card">
      <Link to={`/bookDetails/${book.id}`}>
        <h3 className="title">{book.title}</h3>
      </Link>
      <img
        className="poster"
        width="200px"
        height="300px"
        src={book.bookPoster}
        alt="img"
      />
      <div className="button">
        <Link to={`/start/${book.id}`}>
          <button className="reading-button">start reading </button>
        </Link>
      </div>

      <div className="filter-buttons">
        <button
          style={{
            backgroundColor: book.currentlyRead ? "rgb(6, 100, 48)" : "#4f66fa",
          }}
          onClick={handleClick1}
        >
          currently read
        </button>
        <button
          style={{
            backgroundColor: book.wantToRead ? "rgb(6, 100, 48)" : "#4f66fa",
          }}
          onClick={handleClick2}
        >
          want to read
        </button>
        <button
          style={{ backgroundColor: book.read ? "rgb(6, 100, 48)" : "#4f66fa" }}
          onClick={handleClick3}
        >
          read
        </button>
      </div>
    </div>
  );
}
