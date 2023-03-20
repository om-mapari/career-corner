import React from "react";
import { useRouteError, Link } from "react-router-dom";
// useRouteError --> hook that gives more information about error

function Error() {
  const err = useRouteError();
  console.log('My Error :- ', err);
  const { status, statusText } = err;
  return (

    <div className="container m-2 " >
      <div className="row">
        <div className="col justify-content-center">
          <img width={350} height={200} src="https://career-corner.in/wp-content/uploads/2015/11/course-4.jpg" alt="myimg" />
        </div>
        <div className="col justify-content-center">
          <div>
            <h1 className="text-secondary">Oops!!</h1>
            <h2 className="text-secondary">something went's wrong</h2>
            <p className="fs-1 fw-bold text-danger">{status + " : " + statusText}</p>
            <h2> <Link to="/"> Back to Home Page </Link> </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
