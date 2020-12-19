import React, { memo } from "react";
import { makeStyles, TableCell } from "@material-ui/core";
import PropTypes from "prop-types";

const CellHead = ({ cellData, ...props }) => {
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
    border: `1px solid ${theme.palette.grey[500]}`,
    padding: 8,
  },
  body: {
    color: theme.palette.text.primary,
    backgroundColor: "#ffffff",
    minWidth: 100,
    fontSize: 14,
    padding: "8px 0px",
  },
}));

CellHead.propTypes = {
  cellData: PropTypes.node,
};

export default memo(CellHead);
