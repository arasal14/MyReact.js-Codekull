// eslint-disable-next-line no-unused-vars
import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import "../../App.css";
import img from "../assets/img.jpg";
// eslint-disable-next-line no-unused-vars
import code from "../assets/code.jpg";
import eye from "../assets/eye.png";
// eslint-disable-next-line no-unused-vars
import { getValue } from "@testing-library/user-event/dist/utils";
const data = {
  result: [
    {
      id: 1,
      img: img,
      name: "codekul",
      skills:["JavaScript" , "HTML" , "Css" , "AngularJS" , "ReactJS"],
      phone: 12345,
      email: "abc@gmail.com",
      address: "Kothrud Depot,pune",
    },
    {
      id: 2,
      img: code,
      name: "codekul",
      skills:["JavaScript" , "HTML" , "Css" , "AngularJS" , "ReactJS"],
      phone: 67890,
      email: "bkc@gmail.com",
      address: "Kothrud Depot,pune",
    },
    {
      id: 3,
      img: img,
      name: "codekul",
      skills:["JavaScript" , "HTML" , "Css" , "AngularJS" , "ReactJS"],
      phone: 19876,
      email: "ccd@gmail.com",
      address: "Kothrud Depot,pune",
    },
    {
      id: 4,
      img: code,
      name: "codekul",
      skills:["JavaScript" , "HTML" , "Css" , "AngularJS" , "ReactJS"],
      phone: 154321,
      email: "akkb@gmail.com",
      address: "Kothrud Depot,pune",
    },
  ],
};
console.log(JSON.stringify(data.result));
export default function Header() {
  // eslint-disable-next-line no-unused-vars
  const [dataResult, setDataResult] = React.useState(data);
  console.log("data is", dataResult);

  const [visible, setVisible] = React.useState(false);

  const showContent = () => {
    setVisible(!visible);
  }

  const [info, showInfo] = React.useState(false);

  const showInformation = () => {
    showInfo(true);
  }
  return (
    <div>
      <div>
        <button className="bg-green-600 text-white rounded p-2" onClick={() =>
          {
            showContent();
          }
        }>
          Visible Items
        </button>
      </div>


      {/*Info Div*/}
      {visible ? (
        <div className="grid grid-cols-4 gap-2 mt-12 m-5">
      {data.result.map((data) => (
        <div className="border p-2 shadow-xl rounded">
          <div className="border flex justify-center">
            <img src={data.img} alt=""/>
          </div>
          <div className="flex space-x-2 font-semibold border-black border-b-2 p-2">
            <label>Name &nbsp; :</label>
            <p>{data.name}</p>
          </div>
          <div className="flex space-x-2 font-semibold  border-black border-b-2 p-2">
            <label>Skills &nbsp; :</label>
              <h1>{data.skills}</h1>
          </div>
          <div className="w-8 h-8 float-right mt-5">
            <button onClick={() =>
            {
              showInformation();
            }
            }><img src={eye} alt=""/></button>
          </div>
        </div>
      ))}
    </div>
      ):(
        <div>
          <h1>Hello codekul</h1>
        </div>
      )}
      {info ? (
        <div className="grid grid-cols-4 -mt-2 m-5 gap-2">
      {data.result.map((data) => (
        <div className="border p-2 shadow-xl rounded">
          <div className="flex space-x-2 font-semibold  border-black border-b-2 p-2">
            <label>Phone &nbsp; :</label>
            <p>{data.phone}</p>
          </div>
          <div className="flex space-x-2 font-semibold  border-black border-b-2 p-2">
            <label>Email &nbsp; :</label>
            <p>{data.email}</p>
          </div>
          <div className="flex space-x-2 font-semibold">
            <label>Address &nbsp; :</label>
            <p>{data.address}</p>
          </div>
        </div>
      ))}
    </div>
      ):(
        null
      )}
      
    </div>

  );

}

