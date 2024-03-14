import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast,Toaster } from "react-hot-toast";
export default function Login() {
  const [FormData, setFormData] = useState({});
  const [errmessages, seterrmessages] = useState({});
  const [submit, setsubmit] = useState(false);
  const inputchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...FormData, [name]: value });
    console.log(FormData);
  };

  const validate = (values) => {
    var error = {};

    if (!values.email) {
      error.email = "Email cannot be empty";
    }
    if (!values.password) {
      error.password = "Password cannot be null";
    }

    return error;
  };
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setsubmit(true);
    seterrmessages(validate(FormData));
    if (Object.keys(errmessages).length === 0 && submit) {
      toast('loging u in!', {
        icon: '🔃',
      });
      axios
        .post("http://127.0.0.1:8000/api/login", FormData)
        .then((res) => {
          console.log(res);
          localStorage.setItem('login_id', JSON.stringify(res.data.data.login_id))
          localStorage.setItem('email', JSON.stringify(res.data.data.email))
          navigate("/view");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Password/email is wrong")

        });
      // console.log(FormData,"check for issues");
    }
    console.log("i have been clicked - login");
  };
  return (
    <div
      className="rounded-[10px] h-[auto] py-10 px-10 sm:px-20  
    flex flex-col items-center align-middle 
    lg:border lg:shadow-md lg:border-white lg:border-opacity-20 lg:shadow-white 
  "
    >
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <form action="">
        <h1 className="text-green-500 text-3xl text-center uppercase font-bold  underline -rotate-2">
          Login Now
        </h1>
        <br />
        <span className="text-white ">
          Dont have an account ?{" "}
          <a className="underline hover:text-green-500" href="/register">
            Sign up now
          </a>
        </span>
        <div className="flex flex-col py-10 gap-1">
          {errmessages.email ? (
            <span className="text-red-500 text-center">
              {errmessages.email}
            </span>
          ) : (
            <span></span>
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
            <span className="text-red-500 text-center">
              {errmessages.password}
            </span>
          ) : (
            <span className="text-center text-green-500"></span>
          )}
          <input
            type="password"
            name="password"
            value={FormData.password}
            onChange={inputchange}
            placeholder="Enter your password"
            class="bg-[#292929] border-2 appearance-none outline-none border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition m-3 w-full"
          />
        </div>
        <div className="w-full flex justify-center align-middle">
          <button
            onClick={(e) => {
              handleLogin(e);
            }}
            className="px-6 py-3 bg-[#191919] border border-[#3e3e3e] hover:bg-green-500 text-white hover:text-black rounded-[10px]"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
