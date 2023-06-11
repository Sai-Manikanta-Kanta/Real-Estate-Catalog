import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";

function ViewPage() {
  const location = useLocation();
  const tableDetails = location.state;
  const [heading, setHeading] = useState("Basic Info");
  const active = "#6AB4F8";
  const normal = "";
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => { }, [page]);
  return (
    <div className="container" style={{ padding: "25px" }}>
      <div style={{ display: "flex" }}>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="btn btn-info"
          style={{
            fontSize: "larger",

            alignItems: "center",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            justifyContent: "center",
            borderRadius: "35px",
          }}
        >
          <RiArrowGoBackLine />

          <span className="ms-1 d-none d-sm-inline">Back</span>
        </button>
      </div>
      <h1>Property and Owner Details</h1>
      <table
        style={{ marginTop: "15px" }}
        id="example"
        className="table   container table-info"
      >
        <thead>
          <tr>
            <th colSpan="2">
              <h3>{heading}</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {(() => {
            switch (page) {
              case 1:
                return (
                  <>
                    <tr>
                      <td>Property ID</td>
                      <td>{tableDetails.ppdId}</td>
                    </tr>
                    <tr>
                      <td>Property Type</td>
                      <td>{tableDetails.property}</td>
                    </tr>
                    <tr>
                      <td>Negotiable</td>
                      <td>{tableDetails.negotiable}</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>{tableDetails.price}</td>
                    </tr>
                    <tr>
                      <td>Ownership</td>
                      <td>{tableDetails.ownership}</td>
                    </tr>
                    <tr>
                      <td>Property Age</td>
                      <td>{tableDetails.propertyAge}</td>
                    </tr>
                    <tr>
                      <td>Property Approved</td>
                      <td>{tableDetails.propApproved}</td>
                    </tr>
                    <tr>
                      <td>Property Description</td>
                      <td>{tableDetails.propDescription}</td>
                    </tr>
                    <tr>
                      <td>Bank Loan</td>
                      <td>{tableDetails.bankLoan}</td>
                    </tr>
                  </>
                );
              case 2:
                return (
                  <>
                    <tr>
                      <td>Length</td>
                      <td>{tableDetails.length}</td>
                    </tr>
                    <tr>
                      <td>Breath</td>
                      <td>{tableDetails.breadth}</td>
                    </tr>
                    <tr>
                      <td>Total Area</td>
                      <td>{tableDetails.area}</td>
                    </tr>
                    <tr>
                      <td>Area Unit </td>
                      <td>{tableDetails.areaUnit}</td>
                    </tr>
                    <tr>
                      <td>No of BHK</td>
                      <td>{tableDetails.bhk}</td>
                    </tr>
                    <tr>
                      <td>No of Floor</td>
                      <td>{tableDetails.floorNum}</td>
                    </tr>
                    <tr>
                      <td>Attached</td>
                      <td>{tableDetails.attached}</td>
                    </tr>
                    <tr>
                      <td>Western Toilet</td>
                      <td>{tableDetails.westToilet}</td>
                    </tr>
                    <tr>
                      <td>Furnished</td>
                      <td>{tableDetails.furnished}</td>
                    </tr>
                    <tr>
                      <td>Car Parking</td>
                      <td>{tableDetails.parking}</td>
                    </tr>
                    <tr>
                      <td>Lift</td>
                      <td>{tableDetails.lift}</td>
                    </tr>
                    <tr>
                      <td>Electricity</td>
                      <td>{tableDetails.electricity}</td>
                    </tr>
                  </>
                );
              case 3:
                return (
                  <>
                    <tr>
                      <td>Name</td>
                      <td>{tableDetails.name}</td>
                    </tr>
                    <tr>
                      <td>Mobile</td>
                      <td>{tableDetails.mobile}</td>
                    </tr>
                    <tr>
                      <td>Posted by</td>
                      <td>{tableDetails.postedBy}</td>
                    </tr>
                    <tr>
                      <td>Sale Type</td>
                      <td>{tableDetails.saleType}</td>
                    </tr>
                    <tr>
                      <td>Featured Package</td>
                      <td>{tableDetails.package}</td>
                    </tr>
                    <tr>
                      <td>PPD Package</td>
                      <td>{tableDetails.ppdPackage}</td>
                    </tr>
                  </>
                );
              case 4:
                return (
                  <>
                    <tr>
                      <td>Email</td>
                      <td>{tableDetails.email}</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>{tableDetails.city}</td>
                    </tr>
                    <tr>
                      <td>Area</td>
                      <td>{tableDetails.addArea}</td>
                    </tr>
                    <tr>
                      <td>Pincode</td>
                      <td>{tableDetails.pincode}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>{tableDetails.address}</td>
                    </tr>
                    <tr>
                      <td>Landmark</td>
                      <td>{tableDetails.landmark}</td>
                    </tr>
                    <tr>
                      <td>Latitude</td>
                      <td>{tableDetails.latitude}</td>
                    </tr>
                    <tr>
                      <td>Longitude</td>
                      <td>{tableDetails.longitude}</td>
                    </tr>
                  </>
                );
              default:
                <></>;
            }
          })()}
        </tbody>
      </table>
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
    </div>
  );
}

export default ViewPage;