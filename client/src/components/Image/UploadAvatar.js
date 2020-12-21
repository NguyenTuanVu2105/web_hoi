import React, { memo, useState } from "react";
import { makeStyles, Box, Avatar } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

const UploadAvatar = ({ onChooseFile, src }) => {
  const [selectedFile, setSelectedFile] = useState(src ? src : null);

  const onClickUpload = (event) => {
    let file = event.target.files[0];
    if (file.size <= 2097152) {
      onChooseFile(file);
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Avatar className={classes.largerImage} src={selectedFile}>
        <PhotoCamera className={classes.rootCamera} />
      </Avatar>
      <input
        accept=".png,.jpg,.jpeg"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={onClickUpload}
      />
      <label className={classes.boxLabel} htmlFor="contained-button-file">
        Chọn ảnh
      </label>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    position: "relative",
  },
  rootCamera: {
    width: "50%",
    height: "50%",
  },
  input: {
    display: "none",
  },
  largerImage: {
    width: 125,
    height: 125,
    borderRadius: "50%",
    position: "absolute",
  },
  boxLabel: {
    width: 125,
    height: 62.5,
    zIndex: 1,
    marginTop: 62.5,
    marginBottom: 0,
    textAlign: "center",
    paddingTop: 10,
    borderBottomLeftRadius: 125,
    borderBottomRightRadius: 125,
    fontSize: 14,
    fontWeight: 500,
    opacity: 0,
    "&:hover": {
      opacity: 1,
      backgroundColor: "rgb(104 98 98 / 0.6)",
      color: "white",
    },
  },
}));
export default memo(UploadAvatar);
