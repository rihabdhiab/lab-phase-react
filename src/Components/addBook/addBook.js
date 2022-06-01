import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add_book } from "../../Redux/Actions/actions";
import './addBook.css'

export default function AddBook() {
  const [newBook, setNewBook] = useState({
    id: Math.random(),
    title: "",
    bookPoster: "",
    author: "",
    description: "",
    pages: 1,
    Comments: "",
  });
  let dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(
      add_book({
        id: Math.random(),
        title: newBook.title,
        bookPoster: newBook.bookPoster,
        author: newBook.author,
        description: newBook.description,
        pages: newBook.pages,
        Comments: newBook.Comments,
      })
    );
    setShow(false);
  };

  return (
    <div>
      <button onClick={handleShow}>Add a book</button>
      <Modal show={show} onHide={handleClose}>
        <div className="modal-box">
          <Modal.Header closeButton>
            <Modal.Title className="modal-header">Add New Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              className="add-input"
              name="title"
              type="text"
              placeholder="title.."
              onChange={handleChange}
            />
            <input
              className="add-input"
              name="bookPoster"
              type="text"
              placeholder="posterBookUrl.."
              onChange={handleChange}
            />
            <input
              className="add-input"
              name="description"
              type="text"
              placeholder="description.."
              onChange={handleChange}
            />
            <input
              className="add-input"
              name="pages"
              type="text"
              placeholder="numberOfPages.."
              onChange={handleChange}
            />

            <input
              className="add-input"
              name="author"
              type="text"
              placeholder="Name Of Author.."
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="button1"
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              className="button2"
              variant="primary"
              onClick={handleSubmit}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}
