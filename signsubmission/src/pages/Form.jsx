import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";

export default function Form() {
  const [sign, setsign] = useState();
  const [url, seturl] = useState();
  const [isSignatureSaved, setisSignatureSaved] = useState(false);

  console.log(sign, "sign properties");

  const handleClear = (e) => {
    e.preventDefault();
    sign.clear();
    setisSignatureSaved(false);
  };
  const handleSave = (e) => {
    e.preventDefault();
    seturl(sign.getTrimmedCanvas().toDataURL("image/png"));
    setisSignatureSaved(true);
  };
  console.log(url);
  return (
    <div className="rounded-[10px] h-[auto] py-10 px-10 sm:px-20 sm:border sm:shadow-lg sm:shadow-white">
      <h1 className="text-white text-center text-3xl font-bold uppercase">
        Enter Details
      </h1>
      <form action="" className="">
        <div className="flex flex-col sm:flex-row py-10 gap-1">
          <div className="flex flex-col items-center  justify-center">
            <span className="text-center  ">Enter Your name</span>
            <input
              placeholder="Full Name"
              class="bg-[#292929] border-2 appearance-none outline-none border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition m-3 w-full"
              type="text"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-center  ">Enter Your Email adress</span>
            <input
              placeholder="Email"
              class="bg-[#292929] border-2 outline-none border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition m-3 w-full"
              type="text"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-center  ">Enter Your Phone number</span>
            <input
              placeholder="Phone"
              class="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition m-3 w-full"
              type="text"
            />
          </div>
        </div>
        <div>
          {isSignatureSaved ? (
            <span className="mt-3 text-green-500 ml-3">Signature saved</span>
          ) : (
            <span className="mt-3 text-white ml-3">Draw Your sign below</span>
          )}
          <SignatureCanvas
            penColor="green"
            canvasProps={{
              className: "sigCanvas rounded-[20px]",
              style: {
                border: "2px solid #ccc",
                width: "98%",
                maxWidth: "80vw",
                height: "250px",
              },
              willReadFrequently: true,
            }}
            ref={(data) => setsign(data)}
          />

          <button
            className="px-5 py-2 bg-white hover:bg-green-500 text-black hover:text-white border-none rounded-[10px] mt-3"
            onClick={(e) => handleClear(e)}
          >
            Clear
          </button>
          <button
            className="px-5 py-2 bg-white hover:bg-green-500 text-black hover:text-white border-none rounded-[10px] mt-3 ml-3"
            onClick={(e) => handleSave(e)}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
