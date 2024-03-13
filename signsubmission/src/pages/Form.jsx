import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";

export default function Form() {
  const [sign, setsign] = useState();
  const [isSignatureSaved, setisSignatureSaved] = useState(false);

  // console.log(sign, "sign properties");

  //clear ,save signature
  const handleClear = (e) => {
    e.preventDefault();
    sign.clear();
    setisSignatureSaved(false);
  };
  const handleSave = (e) => {
    e.preventDefault();
    const fileName = `signature_${Date.now()}.png`;
    const url = sign.getTrimmedCanvas().toDataURL("image/png");
    const file = new File([url], fileName, { type: "image/png" });
    console.log(file, "file");
    setinput({ ...input, signature: file });

    setisSignatureSaved(true);
  };

  // -----------------------------------------------form data handling
  const [input, setinput] = useState({});
  const inputchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setinput({ ...input, [name]: value });
  };
  // console.log(input, "input data");

  // validation check

  const [errmessages, seterrmessages] = useState({});

  const validate = (values) => {
    var error = {};
    const ema = /\S+@\S+\.\S+/;
    const pho = /^\d{10}$/;
    if (!values.name) {
      error.name = "Please add your name";
    }

    if (!values.email) {
      error.email = "Email cannot be empty";
    } else if (!ema.test(values.email)) {
      error.email = "Invalid email format";
    }
    if (!values.phone) {
      error.phone = "Phone number cannot be empty";
    } else if (!pho.test(values.phone)) {
      error.phone = "Invalid phone number format";
    }
    if (!values.signature) {
      error.signature = "Add sign";
    }

    return error;
  };

  // submit form function

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedInput = { ...input };
    console.log(updatedInput, "final output");
    seterrmessages(validate(updatedInput));
  };

  return (
    <div className="rounded-[10px] h-[auto] py-10 px-10 sm:px-20 sm:border sm:shadow-md sm:shadow-white flex flex-col items-center align-middle">
      <h1 className="text-green-500 text-center text-3xl font-bold uppercase">
        Enter Details
      </h1>
      <form action="" className="">
        <div className="flex flex-col sm:flex-row py-10 gap-1">
          <div className="flex flex-col items-center  justify-center">
            {errmessages.name ? (
              <span className="text-red-500">{errmessages.name}</span>
            ) : (
              <span className="text-center text-green-500">
                Enter Your name
              </span>
            )}
            <input
              placeholder="Full Name"
              name="name"
              value={input.name}
              onChange={inputchange}
              class="bg-[#292929] border-2 appearance-none outline-none border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition m-3 w-full"
              type="text"
            />{" "}
          </div>
          <div className="flex flex-col items-center justify-center">
            {errmessages.email ? (
              <span className="text-red-500">{errmessages.email}</span>
            ) : (
              <span className="text-center text-green-500">
                Enter Your Email address
              </span>
            )}
            <input
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={inputchange}
              class="bg-[#292929] border-2 outline-none border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition m-3 w-full"
              type="email"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            {errmessages.phone ? (
              <span className="text-red-500">{errmessages.phone}</span>
            ) : (
              <span className="text-center text-green-500">
                Enter Your phone number
              </span>
            )}
            <input
              placeholder="Phone"
              name="phone"
              value={input.phone}
              onChange={inputchange}
              class="bg-[#292929] border-2 outline-none border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition m-3 w-full"
              type="number"
            />
          </div>
        </div>
        <div>
          {isSignatureSaved ? (
            <span className="mt-3 text-green-500 ml-3">Signature saved</span>
          ) : (
            <span className="mt-3 text-white ml-3">
              Draw Your sign below ✒️
            </span>
          )}
          {errmessages.signature ? (
            <span className="text-red-500">{errmessages.signature}</span>
          ) : (
            <span className="text-center text-green-500"></span>
          )}
          <SignatureCanvas
            penColor="green"
            canvasProps={{
              className: "sigCanvas rounded-[20px] bg-[#292929] bg-opacity-50",
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
            className="px-5 py-2 bg-white bg-opacity-75 hover:bg-green-500 text-black border-none rounded-[10px] mt-3"
            onClick={(e) => handleClear(e)}
          >
            Clear
          </button>
          <button
            className="px-5 py-2 bg-white bg-opacity-75 hover:bg-green-500 text-black border-none rounded-[10px] mt-3 ml-3"
            onClick={(e) => handleSave(e)}
          >
            Save
          </button>
        </div>

        <div className="flex justify-center align-middle w-full mt-5">
          <button
            className="px-20 py-5 bg-white bg-opacity-75 hover:bg-green-500 text-black border-none rounded-[10px] "
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            <span className="text-blac">Submit Form</span>
          </button>
        </div>
      </form>
    </div>
  );
}
