import React from "react";
import Modal from "@material-ui/core/Modal";
import FilmForm from "../FilmForm/FilmForm";
import "./style.scss";

const AddModal = ({ handleClose, open, handleSubmit, rating, setRating }) => {
  return (
    <Modal open={open} onClose={handleClose} className="add-modal">
      <div className="add-modal__inner">
        <FilmForm
          handleSubmit={handleSubmit}
          handleClose={handleClose}
          rating={rating}
          setRating={setRating}
        ></FilmForm>
      </div>
    </Modal>
  );
};

export default AddModal;
