import React, { memo } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const InputSelector = ({ data, label, ...props }) => {
  return (
    <Autocomplete
      options={data}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
};

export default memo(InputSelector);
