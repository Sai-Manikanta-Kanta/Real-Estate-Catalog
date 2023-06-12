import axios from 'axios';
import React, { useState } from 'react'
import { BsImageFill } from 'react-icons/bs';
import { MdModeEditOutline } from "react-icons/md";
import Image from './Image';

const Search = ({ values }) => {
  // console.log(values._id)
  let token = localStorage.getItem("token");
  let id = localStorage.getItem("userID");
  const [pathFlag, setPathFlag] = useState(false);

  function update(details) {
    console.log(details._id);
    let data = { status: "Sold" };

    axios
      .patch(
        `https://tenxmanikanta-syed-bindhu.onrender.com/api/property/sold/${details._id}`,
        data,
        {
          headers: {
            token: token,
            id: id,
          },
        }

      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => alert("Unable to Update"));
  }
  return (
    <>
      {values._id === "" ? (
        <>
          <h1 style={{ marginTop: "40px", marginLeft: "30%" }}>Property ID Not Found</h1>
        </>
      ) : (
        <>
          <table
            className='table table-hover table-responsive-xl'
            style={{ marginTop: "15px" }}
          >
            <thead style={{ color: "#4C57B6" }}>
              <tr>
                <th scope="col">PPD ID</th>
                <th scope="col">Image</th>
                <th scope="col">Property</th>
                <th scope="col">Contact</th>
                <th scope="col">Area</th>
                <th scope="col">Views</th>
                <th scope="col">Status</th>
                <th scope="col">Days Left</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr key={values.ppdId}>
                <th scope='row'>{values.ppdId}</th>
                <th scope='col' onClick={() => setPathFlag(true)}>
                  <BsImageFill />
                </th>
                <th scope="col">{values.property}</th>
                <th scope="col">{values.mobile}</th>
                <th scope="col">{values.area}</th>
                <th scope="col">{values.views}</th>
                <th onClick={() => update(values)} scope='col'>
                  <button style={{ backgroundColor: "#F5FAF5", color: "#416899", borderRadius: "5px", border: "1px solid rgb(228 233 233)" }} className="soldbtn">{values.status}</button>
                </th>
                <th  scope='col'>{values.daysLeft}</th>
                <th scope="col">
                  <MdModeEditOutline />
                </th>
              </tr>
            </tbody>
          </table>
          {
            pathFlag && (
              <div
                style={{
                  width: "50%",
                  height: "40%",
                  minHeight: "40%",
                  position: "absolute",
                  top: "25%",
                  left: "25%",
                  display: "flex",
                  flexDirection: "column",
                }}
                onClick={() => setPathFlag(false)}
              >

                <Image path={values.imageUrl} />
              </div>
            )}
        </>
      )}
    </>
  );
}

export default Search;