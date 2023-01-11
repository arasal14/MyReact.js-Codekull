import * as React from "react";
import Box from "@mui/material/Box";
// eslint-disable-next-line no-unused-vars
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  // yup 's validation schema

  const schema = yup.object().shape({
    email: yup.string().email().required("must be a email"),
    password: yup
      .string()
      .min(8)
      .max(16)
      .required("password should not be empty"),
    mobileNumber: yup
      .number()
      .typeError("Mobile number must be a number")
      .nullable()
      .moreThan(0, "Floor area cannot be negative")
      .transform((_, val) => (val !== "" ? Number(val) : null))
      .required("Mobile number should not be empty"),
    fullName: yup
      .string()
      .min(8)
      .max(16)
      .required("Fullname should not be empty"),
    pinCode: yup
      .number()
      .typeError("Mobile number must be a number")
      .nullable()
      .moreThan(0, "Floor area cannot be negative")
      .transform((_, val) => (val !== "" ? Number(val) : null))
      .required("Pincode should not be empty"),
    address: yup
      .string()
      .min(18)
      .max(56)
      .required("Address should not be empty"),
  });

  //the object to reset the form to blank values

  const {
    register,
    handleSubmit,
    reset,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
    defaultValues: {
      action: "",
      email: "",
      fullName: "",
      mobileNumber: "",
      address: "",
      pinCode: "",
      password: "",
      status: "",
      city: "",
    },
  });

  const [city, setCity] = React.useState([]);


  // eslint-disable-next-line no-unused-vars
  const onSubmit = (dataObj) => {
    let originalData = props.data;
    originalData.result.push(dataObj);
    props.setData(originalData);
    props.handleClose();
    reset();
  };

  const handleCheckbox = (event) => {
    console.log(event.target);
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <a
            className="text-red-700 my-5 cursor-pointer flex justify-end"
            onClick={() => {
              props.handleClose();
            }}
          >
            <CancelPresentationIcon />
          </a>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-3 gap-2 shadow rounded border p-2 text-center">
              <div>
                <TextField
                  size="small"
                  label="Email"
                  name="email"
                  fullWidth
                  {...register("email")}
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.email?.message}
                </Typography>
              </div>
              <div>
                <TextField
                  size="small"
                  label="Fullname"
                  name="fullName"
                  fullWidth
                  {...register("fullName")}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.fullName?.message}
                </Typography>
              </div>
              <div>
                <TextField
                  size="small"
                  label="Mobile Number"
                  name="mobileNumber"
                  fullWidth
                  {...register("mobileNumber")}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.mobileNumber?.message}
                </Typography>
              </div>
              <div>
                <TextField
                  size="small"
                  label="Password"
                  name="password"
                  fullWidth
                  {...register("password")}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.password?.message}
                </Typography>
              </div>
              <div>
                <TextField
                  size="small"
                  label="Address"
                  name="address"
                  fullWidth
                  {...register("address")}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.address?.message}
                </Typography>
              </div>
              <div>
                <TextField
                  size="small"
                  label="Pincode"
                  name="pinCode"
                  fullWidth
                  {...register("pinCode")}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.pinCode?.message}
                </Typography>
              </div>
              <FormControl>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  size="small"
                  id="demo-simple-select"
                  value={city}
                  label="City"
                  onChange={(event) =>setCity(event.target.value)}
                  {...register("city")}
                >
                  <MenuItem value="mumbai">Mumbai</MenuItem>
                  <MenuItem value="pune">Pune</MenuItem>
                  <MenuItem value="delhi">Delhi</MenuItem>
                  <MenuItem value="hyderabad">Hyderabad</MenuItem>
                </Select>
              </FormControl>
              <FormGroup>
              <div className="flex justify-start">
                <FormControlLabel
                  label="Active"
                  control={<Checkbox onChange={handleCheckbox} />}
                  {...register("status")}
                />
                <FormControlLabel
                  label="Inactive"
                  control={<Checkbox onChange={handleCheckbox} />}
                  {...register("status")}
                />
              </div>  
              </FormGroup>
              <div className="col-span-3 gap-2 flex justify-center">
                <button
                  type="submit"
                  className="border-2 border-green-700 text-green-700 rounded p-2"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    reset();
                  }}
                  variant="contained"
                  className="border-2 border-red-700 rounded text-red-700 p-2"
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
          {/* <>
        {data.result.length > 0 ? (
          <CommonTable
            data={data}
            dataResult={dataResult}
            setDataResult={setDataResult}
            handleCheckbox={handleCheckbox}
          />
        ) : null}
        </> */}
        </Box>
      </Modal>
    </div>
  );
}
