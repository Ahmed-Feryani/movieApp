import React from "react";
import { Form, Formik } from "formik";
import "./style.scss";
import * as Yup from "yup";
import EntryText from "../EntryText/EntryText";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
const INITIAL_STATE = {
  title: "",
  cover: "",
  description: "",
  trailer: "",
};

const FORM_VALIDATION = Yup.object().shape({
  title: Yup.string().required("title is required"),
  cover: Yup.string().required("cover is required").url("fill a valid url"),
  description: Yup.string().required("description is required"),
  trailer: Yup.string().required("cover is required").url("fill a valid url"),
});

const FilmForm = ({ handleSubmit, handleClose, rating, setRating }) => {
  return (
    <div className="film-form">
      <Formik
        initialValues={{ ...INITIAL_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      >
        {({ isValid, dirty }) => {
          return (
            <Form>
              <EntryText
                name="title"
                label="Title"
                placeholder="Enter Movie Title"
              />
              <EntryText
                name="cover"
                label="Cover"
                placeholder="Enter Movie Cover"
              />
              <EntryText
                name="trailer"
                label="Trailer"
                placeholder="Enter Movie Trailer"
              />
              <EntryText
                multiline
                rows={4}
                name="description"
                label="Description"
                placeholder="Enter Movie Description"
              />  
              
              <Rating
                className="film-form__rating"
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
              <div className="film-form__action">
                <Button
                  className="film-form__cancel"
                  variant="contained"
                  onClick={handleClose}
                >
                  cancel
                </Button>
                <Button
                  disabled={!(isValid && dirty)}
                  className="film-form__add"
                  variant="contained"
                  type="submit"
                >
                  ADD
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FilmForm;
