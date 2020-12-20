import React, { memo } from "react";
import { makeStyles, TableCell } from "@material-ui/core";
import PropTypes from "prop-types";

const CellHead = ({ cellData, ...props }) => {
  const classes = useStyles();

  return (
    <TableCell align="center" className={classes.root}>
      {cellData}
    </TableCell>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 14,
    fontWeight: "bold",
    border: `1px solid ${theme.palette.grey[400]}`,
    padding: 10,
    backgroundColor: `${theme.palette.grey[300]}`,
  },
}));

CellHead.propTypes = {
  cellData: PropTypes.node,
};

export default memo(CellHead);
