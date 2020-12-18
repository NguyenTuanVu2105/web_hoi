import React, { memo } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const InputSelector = ({ className, data, label, ...props }) => {
  return (
    <Autocomplete
      options={data}
      getOptionLabel={(option) => option.name}
      className={className}
      size="small"
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
};

export default memo(InputSelector);
