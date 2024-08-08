import React from 'react';
import {Circles, Rings} from 'react-loader-spinner';

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">

      <Rings
        type="Rings"
        color="#00BFFF"
        height={75}
        width={200}
        className="m-5"
      />
        <p className="text-lg text-center px-2"> { message } </p>
    </div>
  )
}

export default Spinner
