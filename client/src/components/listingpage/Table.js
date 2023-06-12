import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsImageFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Image from './Image';
const Table = () => {
    
    let token = localStorage.getItem("token");
    let id = localStorage.getItem(("userID"));
    const navigate = useNavigate();
    const [pathFlag, setPathFlag] = useState(false);
    const [path, setPath] = useState("");
    const [data, setData] = useState([]);
    const [change, setChange] = useState(true);

    function showImage(data) {
        setPath(data.imageUrl);
        setPathFlag(true);
        // console.log(path);
    }

    let url = "https://tenxmanikanta-syed-bindhu.onrender.com/api/property/";
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                token: token,
                id: id,
                Accept: "application/json",
                "Content-Type": "application/json",

            },
        })
            .then((res) => {
                // console.log(res)
                if (res.statusText === "Forbidden") {
                    alert("Session over");
                    navigate('/');
                } else {
                    res.json().then((result) => {
                        setData(result.property);
                        // console.log(result.property);
                    });
                }
            })
            .catch((err) => navigate("/"));
    }, [id, token, url, change, navigate]);

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
                // console.log(res.data);
                setChange(!change);
            })
            .catch((error) => alert("Unable to sell"));
    }
    return (
        <>
            {data.length === 0 ? (
                <>
                    <h1 style={{ marginTop: "40px", marginLeft:"30%" }}>No Property Found</h1>
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
                            {data.map((d) => {
                                return (
                                    <tr key={d.ppdId}>
                                        <th scope='row'>{d.ppdId}</th>
                                        <th scope='col' onClick={() => showImage(d)}>
                                            <BsImageFill />
                                        </th>
                                        <th scope="col">{d.property}</th>
                                        <th scope="col">{d.mobile}</th>
                                        <th scope="col">{d.area}</th>
                                        <th scope="col">{d.views}</th>
                                        <th onClick={() => update(d)} scope='col'>
                                            <button style={{ backgroundColor: "#F5FAF5", color: "#416899", borderRadius: "5px", border: "1px solid rgb(228 233 233)" }} className="soldbtn">{d.status}</button>
                                        </th>
                                        <th style={{}} scope='col'>{d.daysLeft}</th>
                                        <th scope="col"
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-evenly",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <span
                                                onClick={() => {
                                                    navigate("/viewpage", {state: d});
                                                }}
                                            >
                                                {" "}
                                                <BsFillEyeFill />
                                            </span>
                                            <span
                                                onClick={() => {
                                                    navigate("/update" , { state: d});
                                                }}
                                            >
                                                <MdModeEditOutline />
                                            </span>
                                        </th>
                                    </tr>
                                );
                            })}

                            {/* <tr>
                                <th scope='row'>PPD1126</th>
                                <th scope='col'><BsImageFill /></th>
                                <th scope="col">Plot</th>
                                <th scope="col">0987654321</th>
                                <th scope="col">46378433</th>
                                <th scope="col">84</th>
                                <th scope='col'>
                                    <button style={{ backgroundColor: "#F5FAF5", color: "#416899", borderRadius: "5px", border: "1px solid rgb(228 233 233)" }} className="soldbtn">Unsold</button>
                                </th>
                                <th scope='col'>66</th>
                                <th scope="col"
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        cursor: "pointer"
                                    }}
                                >
                                    <span
                                        onClick={() => {
                                            navigate("/viewpage")
                                        }}
                                    >
                                        {" "}
                                        <BsFillEyeFill />
                                    </span>
                                    <span
                                        onClick={() => {
                                            navigate("/update")
                                        }}
                                    >
                                        <MdModeEditOutline />
                                    </span>
                                </th>
                            </tr> */}
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

                                <Image path={path}/>
                            </div>
                        )}
                </>
            )}
        </>
    );
}

export default Table