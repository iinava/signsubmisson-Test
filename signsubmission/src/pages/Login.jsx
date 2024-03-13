import React, { useState } from "react";

export default function Login() {

    const [FormData, setFormData] = useState({})
    const inputchange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        setFormData({ ...FormData, [name]: value });
        console.log(FormData);
      };


      const handleLogin = (e)=>{
        e.preventDefault();
        console.log("i have been clicked");
      }
  return (
    <div
      className="rounded-[10px] h-[auto] py-10 px-10 sm:px-20  
    flex flex-col items-center align-middle 
    lg:border lg:shadow-md lg:border-white lg:border-opacity-20 lg:shadow-white 
  "
    >
      <form action="">
        <h1 className="text-green-500 text-3xl text-center uppercase font-bold  underline -rotate-2">
          Login Now
        </h1>
        <br />
        <span className="text-white ">
          Dont have an account ?{" "}
          <a className="underline hover:text-green-500" href="">
            Sign up now
          </a>
        </span>
        <div className="flex flex-col py-10 gap-1">
          <input
            type="text" name="email" value={FormData.email}
            placeholder="Enter your email adress"
            class="bg-[#292929] border-2 appearance-none outline-none border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition m-3 w-full"
          />
          <input
            type="password" name="password" value={FormData.password}
            placeholder="Enter your password"
            class="bg-[#292929] border-2 appearance-none outline-none border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition m-3 w-full"
          />
        </div>
        <div className="w-full flex justify-center align-middle">
          <button onClick={(e)=>{handleLogin(e)}} className="px-6 py-3 bg-[#191919] border hover:bg-green-500 text-white hover:text-black rounded-[10px]">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
