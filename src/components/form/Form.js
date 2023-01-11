// eslint-disable-next-line no-unused-vars
import { TextField } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import CommonTable from "../homePage/common/CommonTable";
import LoginModal from "./LoginModal";
import { PropaneSharp } from "@mui/icons-material";

const loginData = {
  message: "Alert",
  result: [
    {
      Id: 1,
      email: "John",
      fullName: "doe",
      mobileNumber: "1234",
      password: "@***",
      address: "Codekul,Pune",
      pinCode: "411234",
      city:"",
      status: "Active",
    },
  ],
  statusCode: 200,
  actions: ["Edit", "Delete"],
};

function Form() {
  const [data, setData] = React.useState({ actions: [], result: [] });

  const [dataResult, setDataResult] = React.useState([]);

  const [check, setCheck] = React.useState();

  const handleCheckbox = () => setCheck(false);


  //open and close modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect((element) => {
    setData(loginData);

    setDataResult(loginData.result);
  }, []);

  console.log(dataResult);

  return (
    <div className="mt-12 grid justify-center">
      <Button onClick={handleOpen}>Open modal</Button>
      <>
        {data.result.length > 0 ? (
          <CommonTable
            data={data}
            dataResult={dataResult}
            setDataResult={setDataResult}
            handleCheckbox={handleCheckbox}
          />
        ) : null}

        <LoginModal
          open={open}
          handleClose={handleClose}
          data={data}
          dataResult={dataResult}
          setData={setDataResult}
          handleCheckbox={handleCheckbox}
          
        />
      </>
    </div>
  );
}

export default Form;
