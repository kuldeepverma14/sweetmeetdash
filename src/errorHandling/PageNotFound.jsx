import React from "react";
import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const error = useRouteError();

  return (
    <div className='text-red-500 min-h-screen flex flex-col justify-center items-center'>
      <h1 className="text-[10rem]">404</h1>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
         <i>{error?.statusText || error?.message || "Page not found"}</i>
      </p>
    </div>
  );
};

export default PageNotFound;
