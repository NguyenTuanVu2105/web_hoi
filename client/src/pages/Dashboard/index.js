import React, { memo } from "react";
import MainLayout from "../../layouts/MainLayout";
import {
  makeStyles,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
} from "@material-ui/core";
import { InputSelector, CellHead, CellBody } from "../../components";

const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <MainLayout>
      <TableContainer style={{ margin: 50, width: 700 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <CellHead cellData="name"></CellHead>
              <CellHead cellData="year"></CellHead>
              <CellHead cellData="name"></CellHead>
              <CellHead cellData="year"></CellHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data) => (
              <TableRow>
                <CellBody cellData={data.name}></CellBody>
                <CellBody cellData={data.year}></CellBody>
                <CellBody cellData={data.name}></CellBody>
                <CellBody cellData={data.year}></CellBody>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainLayout>
  );
};

const useStyles = makeStyles((theme) => ({}));

const data = [
  { name: "The Shawshank Redemption", year: 1994 },
  { name: "The Godfather", year: 1972 },
  { name: "Bicycle Thieves", year: 1948 },
  { name: "The Kid", year: 1921 },
  { name: "Inglourious Basterds", year: 2009 },
  { name: "Snatch", year: 2000 },
  { name: "3 Idiots", year: 2009 },
  { name: "Monty Python and the Holy Grail", year: 1975 },
];

export default memo(Dashboard);
