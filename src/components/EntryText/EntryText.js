import React from "react";
import TextField from "@material-ui/core/TextField";

import { useField } from "formik";

const EntryText = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);
  const configTextField = {
    fullWidth: true,
    variant: "outlined",
    ...field,
    ...otherProps,
  };
  // ...
  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return (
    <div>
      <TextField {...configTextField} />
    </div>
  );
};

export default EntryText;
