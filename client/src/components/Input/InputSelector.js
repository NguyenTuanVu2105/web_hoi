import React, { memo } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const InputSelector = ({ className, data, label, ...props }) => {
  const classes = useStyles();

  return (
    <Autocomplete
      options={data}
      getOptionLabel={(option) => option.name}
      size="small"
      className={className}
      classes={{ tagSizeSmall: classes.tagSizeSmall }}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  tagSizeSmall: {
    height: 35,
  },
}));

export default memo(InputSelector);
