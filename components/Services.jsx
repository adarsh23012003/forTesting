import React from "react";

function Services(props) {
  return (
    <>
      <div className='inline-block border-2 p-3'>
        <div className='flex justify-center items-center'>{props.children}</div>
        <h1 className='flex justify-center items-center'>{props.title}</h1>
      </div>
    </>
  );
}

export default Services;
