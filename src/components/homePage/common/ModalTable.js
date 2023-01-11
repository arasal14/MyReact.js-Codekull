import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import {useForm} from "react-hook-form";

const style = {
  position: "absolute",
  top: "30%",
  left: "75%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let [array,setArray] = useState([])
  let [inputdata,setInputdata] = useState({firstName:"",lastName:""})

  function getData(e){
    setInputdata({...inputdata,[e.target.firstName]:e.target.value})
  }

  let {firstName,lastName} = inputdata;

  function addinputdata(){
    setArray([...array,{firstName,lastName}])
    console.log(inputdata)
    setInputdata({firstName:"",lastName:""})
  }

  return (
    <>
    <form>
    <div className="flex justify-between border border-3 border-black mx-2 p-2">
      <input
        className="border border-3 w-80 h-10 px-2"
        type="search"
        placeholder="search for"
      ></input>
      <Button variant="contained" onClick={handleOpen}>
        Add More
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex justify-between gap-2">
          <TextField type="text" className="w-100" label="First Name" name="firstName" value={inputdata.firstName || ""} onChange={getData} />
          <TextField type="text" className="w-100" label="Last Name" name="lastName" value={inputdata.lastName || ""} onChange={getData} />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Active" />
          </FormGroup>
          <div className="flex mt-10 gap-2">
            <Button variant="outlined" color="error">
              Reset
            </Button>
            <Button onClick={addinputdata} variant="outlined" color="success">
              Add
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
    </form>
    <>
      <br/>

      <table border="1px" width="100%">
        <tbody>
          <tr>
            <td>
              First Name
            </td>
            <td>
              Last Name
            </td>
            {
              array && array.map((item,[i]) => {
                <tr>
                    <th>{item.firstName}</th>
                    <th>{item.lastName}</th>
                  </tr>
              })
            }
          </tr>
        </tbody>
      </table>
    </>
    </>
  );
}


