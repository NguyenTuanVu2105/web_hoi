import React, { memo } from "react";
import {
  makeStyles,
  Box,
  TablePagination,
  Typography,
} from "@material-ui/core";
import { Pagination, PaginationItem } from "@material-ui/lab";

const Footer = ({ onNextPage, page, total, ...props }) => {
  const classes = useStyles();
  const rowsPerPage = 10;

  const onChangePage = () => {
    onNextPage();
  };

  return (
    <Box className={classes.paginationParent}>
      <TablePagination
        classes={{
          root: classes.tablePagination,
          selectRoot: classes.selectRoot,
          toolbar: classes.toolbar,
          caption: classes.caption,
          actions: classes.actions,
        }}
        onChangePage={() => null}
        count={total}
        page={page}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage={``}
        labelDisplayedRows={({ from, to, count }) => (
          <Typography className={classes.paginationTypo}>
            {`Hiển thị kết quả từ ${from} - ${to} trên tổng ${count}`}
          </Typography>
        )}
      />
      <Pagination
        className={classes.tablePagination}
        count={parseInt((total - 1) / rowsPerPage) + 1}
        onChange={onChangePage}
        page={page + 1}
        size="small"
        renderItem={(item) => (
          <PaginationItem
            classes={{
              page: classes.paginationItem,
              selected: classes.selected,
            }}
            {...item}
          />
        )}
      />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  paginationParent: {
    display: "flex",
    width: "100%",
  },
  tablePagination: {
    display: "flex",
    textAlign: "center",
    borderBottom: "none",
    color: theme.palette.grey[600],
  },
  selectRoot: {
    display: "none",
    paddingLeft: 0,
  },
  toolbar: {
    paddingLeft: 0,
  },
  caption: {
    paddingBottom: 4,
  },
  actions: {
    display: "none",
  },
  paginationTypo: {
    marginLeft: 10,
  },
  paginationItem: {
    fontSize: "12px !important",
  },
  selected: {
    color: "#447aff",
    backgroundColor: "unset !important",
  },
}));

export default memo(Footer);
