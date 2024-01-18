import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import data from "./data.js";
import { tableArrow, crossArrow } from "./../asset/svg/index.js";
export const TableComponent = function BasicTable() {
  return (
    <TableContainer className="text-[1rem]">
      <Table aria-label="simple table">
        <TableHead
          style={{
            backgroundColor: "rgba(59, 63, 159, 0.20)",
          }}
        >
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <h4 style={{ fontWeight: "700", color: "#07137F" }}>
                Member Name
              </h4>
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <h4
                  style={{
                    fontWeight: "700",
                    color: "#07137F",
                  }}
                >
                  Member Type
                </h4>
                <img src={tableArrow}></img>
              </div>
            </TableCell>
            <TableCell>
              <h4 style={{ fontWeight: "700", color: "#07137F" }}>Set</h4>
            </TableCell>
            <TableCell>
              <h4 style={{ fontWeight: "700", color: "#07137F" }}>
                <div className="flex gap-2">
                  <h4
                    style={{
                      fontWeight: "700",
                      color: "#07137F",
                    }}
                  >
                    Sub Set 1
                  </h4>
                  <img src={tableArrow}></img>
                </div>
              </h4>
            </TableCell>
            <TableCell>
              <h4 style={{ fontWeight: "700", color: "#07137F" }}>
                <div className="flex gap-2">
                  <h4
                    style={{
                      fontWeight: "700",
                      color: "#07137F",
                    }}
                  >
                    Sub Set 2
                  </h4>
                  <img src={tableArrow}></img>
                </div>
              </h4>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              style={{
                border: "none",
                borderBottom: "none",
              }}
            >
              <TableCell>
                <img
                  src={crossArrow}
                  className="p-1"
                  style={{
                    border: "1px solid red",
                    borderRadius: "0.3125rem",
                  }}
                ></img>
              </TableCell>
              <TableCell component="th" scope="row">
                <h4
                  style={{
                    color: "#07137F",
                    fontWeight: "600",
                  }}
                >
                  {row.name}
                </h4>
              </TableCell>
              <TableCell>
                <h4
                  style={{
                    color: "#07137F",
                    fontWeight: "500",
                  }}
                >
                  {row.type}
                </h4>
              </TableCell>
              <TableCell>
                <h4
                  style={{
                    color: "#07137F",
                    fontWeight: "500",
                  }}
                >
                  {row.set}
                </h4>
              </TableCell>
              <TableCell>
                <h4
                  style={{
                    color: "#07137F",
                    fontWeight: "500",
                  }}
                >
                  {row.sub1}
                </h4>
              </TableCell>
              <TableCell>
                <h4
                  style={{
                    color: "#07137F",
                    fontWeight: "500",
                  }}
                >
                  {row.sub2}
                </h4>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
