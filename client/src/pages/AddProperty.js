import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar';
import Navbar from '../components/NavBar';
import '../components/addproperty/addProperty.css';
import BasicInfo from '../components/addproperty/BasicInfo';
import General from '../components/addproperty/General';
import Location from '../components/addproperty/Location';
import PropertyDetail from '../components/addproperty/PropertyDetail';


const AddProperty = () => {
    const active = "#6AB4F8";
    const normal = "";
    const [page, setPage] = useState(1);

    const [values, setValues] = useState({
        property: "",
        length: 0,
        breadth: 0,
        mobile: "",
        negotiable: "",
        price: "",
        ownership: "",
        propertyAge: "",
        propApproved: "",
        propDescription: "",
        bankLoan: "",
        areaUnit: "",
        bhk: "",
        floorNum: "",
        attached: "",
        westToilet: "",
        furnished: "",
        parking: "",
        lift: "",
        electricity: "",
        facing: "",
        name: "",
        postedBy: "",
        saleType: "",
        package: "",
        ppdPackage: "",
        email: ",",
        city: "",
        addArea: "",
        pincode: "",
        address: "",
        landmark: "",
        latitude: "",
        longitude: "",
        imageUrl: "",
    });
    const nextStep = () => {
        setPage(page + 1);
    };
    const prevStep = () => {
        setPage(page - 1);
    };
    const navStep = (navValue) => {
        setPage(navValue);
    };
    const handleInputData = (input) => (e) => {
        let value = e.target.value;
  if (input === "length" || input === "breadth") {
    value = parseInt(value);
  }
  setValues({ ...values, [input]: value });
    };
    function preViewFiles(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setValues({ ...values, imageUrl: reader.result });

        }
    }
    const addImage = (e) => {
        const file = e.target.files[0];
        preViewFiles(file);
    }
    useEffect(() => console.log(page), [page]);
    return (
        <div className='container-fluid'>
            <div className='row flex-nowrap'>
                <SideBar />
                <div className='col container' style={{ maxWidth: "80%" }}>
                    <Navbar />
                    <h4 style={{ color: "#7D7D7D", textAlign: "start" }}>ADD NEW PROPERTY</h4>
                    <div
                        style={{
                            fontSize: "10px",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            marginTop: "30px",
                            marginBottom: "25px",
                            justifyContent: "space-around",
                        }}
                    >
                        <button
                            type="button"
                            onClick={() => setPage(1)}
                            className="btn active"
                            style={{
                                fontSize: "20px",
                                display: "flex",
                                alignItems: "center",
                                boxShadow: "0px 13px 25px rgba(0, 0, 0, 0.15)",
                                justifyContent: "center",
                                backgroundColor: page === 1 ? active : normal,
                                borderRadius: "35px",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="#17a2b8"
                                className="bi bi-1-circle-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z" />
                            </svg>
                            <span className="ms-1 d-none d-sm-inline addprop mx-2">
                                Basic Info
                            </span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setPage(2)}
                            className="btn active"
                            style={{
                                fontSize: "20px",
                                display: "flex",
                                alignItems: "center",
                                boxShadow: "0px 13px 25px rgba(0, 0, 0, 0.15)",
                                justifyContent: "center",
                                backgroundColor: page === 2 ? active : normal,
                                borderRadius: "35px",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="#17a2b8"
                                className="bi bi-1-circle-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
                            </svg>
                            <span className="ms-1 d-none d-sm-inline addprop mx-2">
                                Property Detail
                            </span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setPage(3)}
                            className="btn active"
                            style={{
                                fontSize: "20px",
                                display: "flex",
                                alignItems: "center",
                                boxShadow: "0px 13px 25px rgba(0, 0, 0, 0.15)",
                                justifyContent: "center",
                                backgroundColor: page === 3 ? active : normal,
                                borderRadius: "35px",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="#17a2b8"
                                className="bi bi-1-circle-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
                            </svg>
                            <span className="ms-1 d-none d-sm-inline addprop mx-2">
                                General Info
                            </span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setPage(4)}
                            className="btn "
                            style={{
                                fontSize: "20px",
                                display: "flex",
                                alignItems: "center",
                                boxShadow: "0px 13px 25px rgba(0, 0, 0, 0.15)",
                                justifyContent: "center",
                                backgroundColor: page === 4 ? active : normal,
                                borderRadius: "35px",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="#17a2b8"
                                className="bi bi-1-circle-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7.519 5.057c-.886 1.418-1.772 2.838-2.542 4.265v1.12H8.85V12h1.26v-1.559h1.007V9.334H10.11V4.002H8.176c-.218.352-.438.703-.657 1.055ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z" />
                            </svg>
                            <span className="ms-1 d-none d-sm-inline addprop mx-2">
                                Location Info
                            </span>
                        </button>
                    </div>
                    {(() => {
                        switch (page) {
                            case 1:
                                return (
                                    <BasicInfo
                                        page={page}
                                        navStep={navStep}
                                        nextStep={nextStep}
                                        HandleFormData={handleInputData}
                                        values={values}
                                    />

                                );
                            case 2:
                                return (
                                    <PropertyDetail
                                        page={page}
                                        navStep={navStep}
                                        nextStep={nextStep}
                                        prevStep={prevStep}
                                        HandleFormData={handleInputData}
                                        values={values}
                                    />

                                );
                            case 3:
                                return (
                                    <General

                                        nextStep={nextStep}
                                        prevStep={prevStep}
                                        addImage={addImage}
                                        HandleFormData={handleInputData}
                                        values={values}
                                        status="add"
                                    />

                                );
                            case 4:
                                return (
                                    <Location

                                        nextStep={nextStep}
                                        prevStep={prevStep}
                                        HandleFormData={handleInputData}
                                        values={values}
                                        status="add"
                                        propertyID="null"
                                    />

                                );
                            default:
                                return null
                        }
                    })()}
                </div>
            </div>
        </div>
    );
}

export default AddProperty;