import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Login } from "@mui/icons-material";

export default function CommonTable(props) {
  console.log("table result is", props);

  const removeHeaders = (headers, fieldToRemove) => {
    return headers.filter((v) => {
      return !fieldToRemove.includes(v);
    });
  };

  //set rows ob to table

  const allHeaders = Object.keys(props.data.result[0]);

  const headers = removeHeaders(allHeaders, ["Id"]);

  console.log(props.data.result, "props data is");

  const [editAction, setEditAction] = React.useState(true);
  const [deleteAction, setDeleteAction] = React.useState(true);

  const handleDelete = (index) => {
    console.log(index);
  };

  React.useEffect(() => {
    props.data.actions.forEach((action) => {
      if (action === "Edit") {
        setEditAction(true);
      }
      if (action === "Delete") {
        setDeleteAction(true);
      }
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table size="small" stickyHeader area-aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell style={{backgroundColor:"lightgray"}}>Actions</TableCell>
            {headers.map((header, index) => (
              <TableCell style={{backgroundColor:"lightgray"}} key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.result &&
            props.data.result.map((row, index) => {
              return (
                <TableRow key={index}>
                  {props.data.actions.length > 0 ? (
                    <TableCell>
                      <div className="flex space-x-2">
                        <div>
                          {editAction ? (
                            <span className="text-blue-700 font-semibold cursor-pointer">
                              <EditIcon />
                            </span>
                          ) : null}
                        </div>
                        <div>
                          {deleteAction ? (
                            <span
                              className="text-red-700 font-semibold cursor-pointer"
                              onClick={() => handleDelete(index)}
                            >
                              <DeleteIcon />
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </TableCell>
                  ) : null}
                  {headers &&
                    headers.map((header, i) => (
                      <TableCell>{row[header]}</TableCell>
                    ))}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
