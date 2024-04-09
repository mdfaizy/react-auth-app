import sharemywork from "../../assets/sharemywork.png";
import { Link } from "react-router-dom";
import { useState } from "react";

import { SlArrowLeft } from "react-icons/sl";
const DesignerChoose = () => {
  //   const [isChecked, setIsChecked] = useState(false); // State to track checkbox status
  // const [formdata,setFormData]=useState({
  //   checkbox1,
  //   checkbox2,
  //   checkbox3
  // })
  // const {checkbox1,checkbox2,checkbox3}=formdata

  // const handleCheckboxChange = (e) => {
  //   setIsChecked(e.target.checked);
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const [isChecked, setIsChecked] = useState(false); // State to track checkbox status
  const [formData, setFormData] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const { checkbox1, checkbox2, checkbox3 } = formData;
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setIsChecked(checked);
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  return (
    <div className=" flex  flex-col justify-center items-center   bg-neutral-50 ">
      <div className="mx-auto w-11/12 max-w-[450px] md:w-full md:max-w-none md:mx-0 items-center">
        <form>
       <div className="mt-10 ml-60 ">
       <Link
          to="/ profile"
          className="p-3  text-white bg-slate-100 rounded-lg  text-center items-center"
        >
          <button><SlArrowLeft className="text-gray-400 text-2xl pt-2"/></button>
        </Link>
       </div>
        <h1 className="font-bold text-2xl text-center">
          What brings you to Dribbble?
        </h1>
        <p className="text-gray-400 pt-3 items-center text-center ">
          Select the options best describe yoy.Don't worry,you can explore other
          options later.
        </p>

        <div className="flex flex-wrap md:gap-y-4 items-center  mt-6 mx-auto justify-center gap-x-4 pt-10 ">
          <div
            className={`w-64 border-2 border-solid ${
              isChecked ? "border-red-500" : "border-zinc-300"
            } items-center text-center rounded-lg h-auto`}
          >
            {isChecked ? (
              <div className="-m-10">
                <img
                  src={sharemywork}
                  alt=""
                  
                  className="w-[200px] mx-auto"
                />
              </div>
            ) : (
              <img
                src={sharemywork}
                alt=""
                
                className="w-[200px] mx-auto"
              />
            )}
            {isChecked ? (
              <>
                <p className="text-center p-2 text-gray-400 mt-6">
                  With over 7 million shots from a vast community of designers.
                  Dribbble is the leading source for design inspiration.
                </p>
              </>
            ) : (
              <></>
            )}
            <input
              type="checkbox"
              className="bg-rose-800 rounded-full w-5 h-5"
              onChange={handleCheckboxChange}
              value={checkbox1}
            />
          </div>
          <div
            className={`w-64 border-2 border-solid ${
              isChecked ? "border-red-500" : "border-zinc-300"
            } items-center text-center rounded-lg h-auto`}
          >
            {isChecked ? (
              <div className="-m-10">
                <img
                  src={sharemywork}
                  alt=""
                  className="w-[200px] mx-auto"
                />
              </div>
            ) : (
              <img
                src={sharemywork}
                alt=""
                className="w-[200px] mx-auto"
              />
            )}
            {isChecked ? (
              <>
                <p className="text-center p-2 text-gray-400 mt-6">
                  With over 7 million shots from a vast community of designers.
                  Dribbble is the leading source for design inspiration.
                </p>
              </>
            ) : (
              <></>
            )}
            <input
              type="checkbox"
              className="bg-rose-800 rounded-full w-5 h-5"
              onChange={handleCheckboxChange}
              value={checkbox2}
            />
          </div>
          <div
            className={`w-64 border-2 border-solid ${
              isChecked ? "border-red-500" : "border-zinc-300"
            } items-center text-center rounded-lg h-auto`}
          >
            {isChecked ? (
              <div className="-m-10">
                <img
                  src={sharemywork}
                  alt=""
                  className="w-[200px] mx-auto"
                />
              </div>
            ) : (
              <img
                src={sharemywork}
                alt=""
                className="w-[200px] mx-auto"
              />
            )}
            {isChecked ? (
              <>
                <p className="text-center p-2 text-gray-400 mt-6">
                  With over 7 million shots from a vast community of designers.
                  Dribbble is the leading source for design inspiration.
                </p>
              </>
            ) : (
              <></>
            )}
            <input
              type="checkbox"
              className="bg-rose-800 rounded-full w-5 h-5"
              onChange={handleCheckboxChange}
              value={checkbox3}
            />
          </div>
        </div>

        <div className="mt-10 items-center mx-auto text-center">
          <p className="font-bold pb-4">
            Anything else? You can select multiple
          </p>
          <Link
            to="/ profile"
            className="bg-rose-800 p-2.5 px-4 w-1/4 text-white rounded-lg"
          >
            <button>Finish</button>
          </Link>
          <p className=" text-gray-500 pt-4">Or Press RETURN</p>
        </div>

        </form>
      </div>
    </div>
  );
};

export default DesignerChoose;
