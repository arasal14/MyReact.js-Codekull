import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { data } from "autoprefixer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {useForm} from "react-hook-form";

const style = {
  position: "absolute",
  top: "25%",
  left: "65%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TableHeader() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      mobileNumber: '',
      password:'',
      address:'',
      pinCode:''
    }
  });

  const [dataResult, setDataResult] = React.useState()

  const onSubmit = (dataObj) => {
    let originalData = data;
    originalData.result.push(dataObj);
    setDataResult(originalData);
  };
  console.log(dataResult);

  

  return (
    <div className="p-2">
      <h1 className="flex justify-center align-center text-3xl font-bold">
        React.js Table Assignment
      </h1>

      <div className="flex justify-between px-5 py-2 border-2">
        <div>
          <input
            className="border border-3 w-80 h-10 px-2"
            type="search"
            placeholder="search for"
          ></input>
        </div>
        <div>
          <Button onClick={handleOpen} variant="contained">
            Add One
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
            <div className="border-2 p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between space-x-2 w-100">
                <TextField className="w-100" label="First Name" name="first name" {...register("firstName")}/>
                <TextField className="w-100" label="Last Name" name="last name" {...register("lastName")}/>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Active"
                  />
                </FormGroup>
              </form>  
              <div className="grid grid-cols-2 gap-2 float-right">
                <Button variant="outlined" color="error">
                  Reset
                </Button>
                <Button variant="outlined" color="success">
                  Add
                </Button>
              </div>
            </div>  
            </Box>
          </Modal>
        </div>
      </div>
      <>
      {/*<TableHeader
        data={data}
      />*/}
    </>
    </div>
  );
}
