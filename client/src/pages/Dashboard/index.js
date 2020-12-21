import React, { memo } from "react";
import MainLayout from "../../layouts/MainLayout";
import {
  makeStyles,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Button,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import {
  InputSelector,
  CellHead,
  CellBody,
  Footer,
  UploadAvatar,
  IconButton,
} from "../../components";

const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <MainLayout>
      <TableContainer
        style={{
          boxShadow: "0 1px 3px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19)",
        }}
      >
        <Table stickyHeader style={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <CellHead cellData="Họ và tên"></CellHead>
              <CellHead cellData="Ngày sinh"></CellHead>
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
                <CellBody cellData={data.name}></CellBody>
                <CellBody cellData={data.year}></CellBody>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer page={0} total={10} />
      <UploadAvatar />
      <IconButton title="Xác nhận" icon={<Close />} />
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
