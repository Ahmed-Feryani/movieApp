import React from "react";
import TextField from "@material-ui/core/TextField";

const Filter = ({ handleChange, filterText }) => {
  return (
    <div>
      <form action="">
        <div className="Entry">
          <TextField
            onChange={handleChange}
            fullWidth
            placeholder="enter a title"
            label="Search field"
            type="search"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            value={filterText}
          />
        </div>
      </form>
    </div>
  );
};

export default Filter;
