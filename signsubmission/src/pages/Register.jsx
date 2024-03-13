import React, { useState } from "react";

export default function Register() {
  const [FormData, setFormData] = useState({});
  const [errmessages, seterrmessages] = useState({});
  const inputchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...FormData, [name]: value });
    console.log(FormData);
  };

  const validate = (values) => {
    var error = {};
    const ema = /\S+@\S+\.\S+/;
    const pw = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!values.email) {
      error.email = "Email cannot be empty";
    } else if (!ema.test(values.email)) {
      error.email = "Invalid email format";
    }
    if (!values.password) {
      error.password = "Password cannot be null";
    } else if (!pw.test(values.password)) {
      error.password =
        " must contain at least one capital and number (min 6 characters)";
    }
    if (!values.confirmpassword) {
      error.confirmpassword = "confirm password";
    } else if (!(values.password == values.confirmpassword)) {
      error.confirmpassword =
        "Password should be same";
    }
   
    return error;
  };

//registration

  const handleRegistration = (e) => {
    e.preventDefault();

    seterrmessages(validate(FormData));
  };
  
  return (
    <div
      className="rounded-[10px] h-[auto] py-10 px-10 sm:px-20  
    flex flex-col items-center align-middle 
    lg:border lg:shadow-md lg:border-white lg:border-opacity-20 lg:shadow-white
  "
    >
      <form action="">
        <h1 className="text-green-500 text-3xl text-center uppercase font-bold  underline underline-offset-4 decoration-green-500 -rotate-3">
          Registration
        </h1>
        <br />
        <span className="text-white ">
          Aldready have an account ?
          <a className="underline hover:text-green-500" href="">
            Sign in
          </a>
        </span>
        <div className="flex flex-col py-10 gap-1">
          {errmessages.email ? (
            <span className="text-red-500 text-center">
              {errmessages.email}
            </span>
          ) : (
            <span className="text-center text-green-500">
             
            </span>
          )}
          <input
            type="text"
            name="email"
            value={FormData.email}
            onChange={inputchange}
            placeholder="Enter your email adress"
            class="bg-[#292929] border-2 appearance-none outline-none border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition m-3 w-full"
          />
          {errmessages.password ? (
            <span className="text-red-500 text-center max-w-[250px] text-pretty ">
              {errmessages.password}
            </span>
          ) : (
            <span className="text-center text-green-500"></span>
          )}
          <input
            value={FormData.password}
            name="password"
            onChange={inputchange}
            type="password"
            placeholder="Enter a password"
            class="bg-[#292929] border-2 appearance-none outline-none border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition m-3 w-full"
          />
           {errmessages.confirmpassword ? (
            <span className="text-red-500 text-center">
              {errmessages.confirmpassword}
            </span>
          ) : (
            <span className="text-center text-green-500">
             
            </span>
          )}
          <input
            type="password"
            value={FormData.confirmpassword}
            name="confirmpassword"
            onChange={inputchange}
            placeholder="Confirm password"
            class="bg-[#292929] border-2 appearance-none outline-none border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition m-3 w-full"
          />
        </div>
        <div className="w-full flex justify-center align-middle">
          <button
            onClick={(e) => {
              handleRegistration(e);
            }}
            className="px-6 py-3 bg-[#191919] border hover:bg-green-500 text-white hover:text-black rounded-[10px]"
          >
            Sign Up Now
          </button>
        </div>
      </form>
    </div>
  );
}
