import React, { memo } from "react";
import { makeStyles, TableCell } from "@material-ui/core";
import PropTypes from "prop-types";

const CellBody = ({ cellData, ...props }) => {
  const classes = useStyles();

  return (
    <TableCell
      align="center"
      classes={{ root: classes.root, body: classes.body }}
    >
      {cellData}
    </TableCell>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.grey[200]}`,
    padding: 8,
  },
  body: {
    color: "#787878",
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    minWidth: 100,
    fontSize: 14,
    padding: "8px 0px",
  },
}));

CellBody.propTypes = {
  cellData: PropTypes.node,
};

export default memo(CellBody);
