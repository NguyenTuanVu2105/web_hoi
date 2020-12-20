import React, { memo } from "react";
import { makeStyles, TableCell } from "@material-ui/core";
import PropTypes from "prop-types";

const CellBody = ({ cellData, ...props }) => {
  const classes = useStyles();

  return (
    <TableCell align="center" className={classes.root}>
      {cellData}
    </TableCell>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#787878",
    border: `1px solid ${theme.palette.grey[300]}`,
    minWidth: 100,
    fontSize: 14,
    padding: 10,
  },
}));

CellBody.propTypes = {
  cellData: PropTypes.node,
};

export default memo(CellBody);
