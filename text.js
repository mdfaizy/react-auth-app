// import { MdCameraEnhance } from "react-icons/md";
// import { MdOutlineChevronRight } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const ProfileUpload = () => {
//   const [image, setImage] = useState(""); // State to hold the image src
//   const [step, setStep] = useState(1);
//   // const [emailExists, setEmailExists] = useState(false); // State to track email existence

//   const nextStep = () => {
//     setStep(step + 1);
//   };

//   const prevStep = () => {
//     if (step > 1) {
//       setStep(step - 1);
//     }
//   };
//   // Function to handle file input change event
//   const handleFileChange = (e) => {
//     const file = e.target.files[0]; // Get the selected file
//     const reader = new FileReader(); // Create a FileReader object

//     // Define a callback function to be executed when reading is finished
//     reader.onload = () => {
//       setImage(reader.result); // Update the imageSrc state with the data URL of the selected file
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className=" flex flex-col justify-center items-center   bg-neutral-50 min-h-screen">
//       <div className="w-112/12 mx-auto  justify-center items-center">
//         <div className="ps-10">
//           <h1 className="text-4xl font-bold">
//             Welcome! Let's create your profile
//           </h1>
//           <p className="pt-4 text-lg text-gray-400">
//             Let other get to know you better!You can do these later
//           </p>
//         </div>

//         <form>
//           <div className=" flex gap-x-10 pt-10 flex-wrap ps-10">
//             <h1 className="font-bold text-2xl">Add an avatar</h1>

//             <span className="absolute w-[150px] h-[150px] text-center items-center  rounded-full border-dashed border-2 border-indigo-600 bg-slate-200  mt-10 mr-4">
//               <img
//                 src={image}
//                 alt=""
//                 className="aspect-square  rounded-full object-cover w-[100%] h-[100%] mr-56"
//               />

//               {!image && ( // Conditionally render camera icon only if imageSrc is empty
//                 <MdCameraEnhance className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//               )}
//             </span>
//             <div className="mt-16   pl-4 ml-4 flex-wrap  ">
//               <div className="relative w-[80%]">
//                 <input
//                   type="file"
//                   className="hidden"
//                   id="fileInput"
//                   onChange={handleFileChange}
//                 />
//                 <label
//                   htmlFor="fileInput"
//                   className="w-full font-bold rounded-2xl flex-grow outline-none border-solid border-2 border-slate-200 py-2 px-4 cursor-pointer"
//                 >
//                   Choose image
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 {" "}
//                 <MdOutlineChevronRight className="mt-4 text-lg" /> {/* Icon */}
//                 <p className="pt-4">Or choose one of our defaults</p>{" "}
//                 {/* Text */}
//               </div>
//             </div>
//           </div>
//           <div className="mt-24 flex-wrap ps-10">
//             <h1 className="font-bold text-2xl">Add your location</h1>
//             <input
//               type="text"
//               placeholder="Enter a location"
//               className="text-xl w-11/12 border-b border-gray-300 border-solid border-2 pt-4 border-l-0 border-r-0 border-t-0 outline-none"
//             />
//           </div>
//           <div className="mt-10 flex gap-5 ps-10">
//             <button className="bg-rose-800 p-2.5 px-4 w-1/3 text-white rounded-lg">
//               <Link to="/designerChoose"> Next</Link>
//             </button>
//           </div>



//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProfileUpload;




















// // //   const [image, setImage] = useState("");
// //   const [step, setStep] = useState(1);
  

// //   const nextStep = () => {
// //     setStep(step + 1);
// //   };

// //   const prevStep = () => {
// //     if (step > 1) {
// //       setStep(step - 1);
// //     }}
// //     const [isChecked, setIsChecked] = useState(false);
// //   // };
// //   // // Function to handle file input change event
// //   const changeHandler = (e) => {
// //     const file = e.target.files[0]; // Get the selected file
// //     const reader = new FileReader(); // Create a FileReader object

// //     // Define a callback function to be executed when reading is finished
// //     reader.onload = () => {
// //       setImage(reader.result); // Update the imageSrc state with the data URL of the selected file
// //     };
// //     reader.readAsDataURL(file);
// //   };

//   // const [isChecked, setIsChecked] = useState(false); // State to track checkbox status
// //   const [formData, setFormData] = useState({
// //     checkbox1: false,
// //     checkbox2: false,
// //     checkbox3: false,
// //     userPrifile:"",
// //     location:"",

// //   });

// //   const { checkbox1, checkbox2, checkbox3,userPrifile,location } = formData;
// //   // const handleCheckboxChange = (e) => {
// //   //   const { name, checked } = e.target;
// //   //   setIsChecked(checked);
// //   //   setFormData((prevData) => ({
// //   //     ...prevData,
// //   //     [name]: checked,
// //   //   }));
// //   // };






















// //   // const changeHandler = (event) => {
// //   //   const { name, value, type,checked, files } = event.target;

// //   //   if (type === "file") {
// //   //     setFormData((prevData) => ({
// //   //       ...prevData,
// //   //       [name]: files[0],
// //   //     }));

// //   //   } else {
// //     // setIsChecked(checked);
// //   //   setFormData((prevData) => ({
// //   //     ...prevData,
// //   //     [name]: checked,
// //   //   }));
  
// // // }else
  
// //   // {
// //   //     setFormData((prevData) => ({
// //   //       ...prevData,
// //   //       [name]: value,
// //   //     }));
// //   //   }
// //   // };

// //   // const submitHandler = async (event) => {
// //   //   event.preventDefault();
// //   //   const formDataToSend = new FormData();
// //   //   // Append each form field to formDataToSend
// //   //   for (let key in formData) {
// //   //     formDataToSend.append(key, formData[key]);
// //   //   }
// //   //   try {
// //   //     const response = await fetch(
// //   //       "http://localhost:3000/api/v1/profile/profile",
// //   //       {
// //   //         method: "POST",
// //   //         // body:JSON.stringify(formData) ,
// //   //         // body: formDataToSend,
// //   //         body: formDataToSend,
// //   //       }
// //   //     );

// //   //     if (response.ok) {
// //   //       const responseData = await response.json();
// //   //       console.log(responseData);

// //   //       console.log(responseData.user._id);

// //   //       // Cookies.set("formData", JSON.stringify(formData));
// //   //       navigate("/");
// //   //       // navigate(`/ShowFormData/${responseData.data._id}`);
// //   //     } else {
// //   //       console.log("Form not submitted. Error status:", response.status);
// //   //     }
// //   //   } catch (error) {
// //   //     console.error("Error occurred:", error);
// //   //   }
// //   // };


















































// import { MdCameraEnhance } from "react-icons/md";
// import { MdOutlineChevronRight } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import sharemywork from "../../assets/sharemywork.png";
// import { useSelector } from "react-redux";
// import { SlArrowLeft } from "react-icons/sl";
// const ProfileUpload = () => {
//   const { token } = useSelector((state) => state.auth);

//   const [step, setStep] = useState(1);

//   const nextStep = () => {
//     setStep(step + 1);
//   };

//   const prevStep = () => {
//     if (step > 1) {
//       setStep(step - 1);
//     }
//   };
//   const [isChecked, setIsChecked] = useState(false);

//   const [image, setImage] = useState("");
//   const [formData, setFormData] = useState({
//     checkbox1: false,
//     checkbox2: false,
//     checkbox3: false,
//     image: null, // Change to null to indicate no file selected initially
//     location: "",
//   });
//   // const changeHandler = (e) => {
//   //   const file = e.target.files && e.target.files[0]; // Check if files exist before accessing properties
//   //   const reader = new FileReader();
//   //   // const { name } = e.target;
//   //   const { name, checked} = e.target;
//   //   setIsChecked(checked);
//   //   setFormData((prevData) => ({
//   //     ...prevData,
//   //     [name]: checked,
//   //   }));
//   //   setFormData((prevData) => ({
//   //     ...prevData,
//   //     [name]: e.target.value, // Update to use e.target.value
//   //   }));

//   //   if (file) {
//   //     reader.onload = () => {
//   //       setImage(reader.result);
//   //     };
//   //     reader.readAsDataURL(file);

//   //     // Update form data with the selected file
//   //     setFormData((prevData) => ({
//   //       ...prevData,
//   //       image: file,
//   //     }));
//   //   }
//   // };

//   const changeHandler = (e) => {
//     const file = e.target.files && e.target.files[0];
//     const reader = new FileReader();
//     const { name, type, value, checked } = e.target;

//     if (type === "checkbox") {
//       setFormData((prevData) => ({
//         ...prevData,
//         checkbox1: name === "checkbox1" ? checked : false,
//         checkbox2: name === "checkbox2" ? checked : false,
//         checkbox3: name === "checkbox3" ? checked : false,
//         [name]: checked, // Update checkbox value
//       }));
//       // setIsChecked(checked);
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value, // Update value for other input types
//       }));
//     }

//     if (file) {
//       reader.onload = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);

//       setFormData((prevData) => ({
//         ...prevData,
//         image: file,
//       }));
//     }
//   };

//   const submitHandler = async (event) => {
//     event.preventDefault();
//     const formDataToSend = new FormData();

//     // Append form data to formDataToSend
//     for (let key in formData) {
//       formDataToSend.append(key, formData[key]);
//     }

//     try {
//       const response = await fetch(
//         "http://localhost:3000/api/v1/profile/profile",
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           body: formDataToSend,
//         }
//       );

//       if (response.ok) {
//         const responseData = await response.json();
//         console.log(responseData);
//         console.log(responseData.user._id);
//         history.push("/");
//       } else {
//         console.log("Form not submitted. Error status:", response.status);
//       }
//     } catch (error) {
//       console.error("Error occurred:", error);
//     }
//   };

//   return (
//     <div className=" flex flex-col justify-center items-center   bg-neutral-50 min-h-screen">
//       <div className="w-112/12 mx-auto  justify-center items-center">
//         <div className="ps-10">
//           <h1 className="text-4xl font-bold">
//             Welcome! Let's create your profile
//           </h1>
//           <p className="pt-4 text-lg text-gray-400">
//             Let other get to know you better!You can do these later
//           </p>
//         </div>

//         <form onSubmit={submitHandler}>
//           {step === 1 && (
//             <>
//               <div className=" flex gap-x-10 pt-10 flex-wrap ps-10">
//                 <h1 className="font-bold text-2xl">Add an avatar</h1>

//                 <span className="absolute w-[150px] h-[150px] text-center items-center  rounded-full border-dashed border-2 border-indigo-600 bg-slate-200  mt-10 mr-4">
//                   <img
//                     src={image}
//                     alt=""
//                     className="aspect-square  rounded-full object-cover w-[100%] h-[100%] mr-56"
//                   />

//                   {!image && ( // Conditionally render camera icon only if imageSrc is empty
//                     <MdCameraEnhance className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//                   )}
//                 </span>
//                 <div className="mt-16   pl-4 ml-4 flex-wrap  ">
//                   <div className="relative w-[80%]">
//                     <input
//                       type="file"
//                       className="hidden"
//                       name="image"
//                       id="fileInput"
//                       onChange={changeHandler}
//                     />
//                     <label
//                       htmlFor="fileInput"
//                       className="w-full font-bold rounded-2xl flex-grow outline-none border-solid border-2 border-slate-200 py-2 px-4 cursor-pointer"
//                     >
//                       Choose image
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     {" "}
//                     <MdOutlineChevronRight className="mt-4 text-lg" />{" "}
//                     <p className="pt-4">Or choose one of our defaults</p>{" "}
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-24 flex-wrap ps-10">
//                 <h1 className="font-bold text-2xl">Add your location</h1>
//                 <input
//                   type="text"
//                   value={formData.location}
//                   name="location"
//                   onChange={changeHandler}
//                   placeholder="Enter a location"
//                   className="text-xl w-11/12 border-b border-gray-300 border-solid border-2 pt-4 border-l-0 border-r-0 border-t-0 outline-none"
//                 />
//               </div>
//               <div className="mt-10 flex gap-5 ps-10">
//                 <button
//                   onClick={nextStep}
//                   className="bg-rose-800 p-2.5 px-4 w-1/3 text-white rounded-lg"
//                 >
//                   Next
//                 </button>
//               </div>
//             </>
//           )}
//           {/* {step === 2 && (
//             <>
//               <div className=" flex  flex-col justify-center items-center   bg-neutral-50 ">
//                 <div className="mx-auto w-11/12 max-w-[450px] md:w-full md:max-w-none md:mx-0 items-center">
//                   <div className="mt-10 ml-60 ">
//                     <button
//                       onClick={prevStep}
//                       className="p-3  text-white bg-slate-200 rounded-lg  text-center -ml-80"
//                     >
//                       <SlArrowLeft className="text-gray-400 text-2xl " />
//                     </button>
//                   </div>
//                   <h1 className="font-bold text-2xl text-center">
//                     What brings you to Dribbble?
//                   </h1>
//                   <p className="text-gray-400 pt-3 items-center text-center ">
//                     Select the options best describe yoy.Don't worry,you can
//                     explore other options later.
//                   </p>

//                   <div className="flex flex-wrap md:gap-y-4 items-center  mt-6 mx-auto justify-center gap-x-4 pt-10 ">
//                     <div
//                       className={`w-64 border-2 border-solid ${
//                         isChecked ? "border-red-500" : "border-zinc-300"
//                       } items-center text-center rounded-lg h-auto`}
//                     >
//                       {isChecked ? (
//                         <div className="-m-10">
//                           <img
//                             src={sharemywork}
//                             alt=""
//                             className="w-[200px] mx-auto"
//                           />
//                         </div>
//                       ) : (
//                         <img
//                           src={sharemywork}
//                           alt=""
//                           className="w-[200px] mx-auto"
//                         />
//                       )}
//                       {isChecked ? (
//                         <>
//                           {formData.checkbox1 && (
//                             <p className="text-center p-2 text-gray-400 mt-6">
//                               With over 7 million shots from a vast community of
//                               designers. Dribbble is the leading source for
//                               design inspiration.
//                             </p>
//                           )}
                          
//                         </>
//                       ) : (
//                         <></>
//                       )}
//                       <input
//                         type="checkbox"
//                         name="checkbox1"
//                         className="bg-rose-800 rounded-full w-5 h-5"
//                         onChange={changeHandler}
//                         // checked={formData.checkbox1}
//                         value={formData.checkbox1}
//                       />
//                     </div>
//                     <div
//                       className={`w-64 border-2 border-solid ${
//                         isChecked ? "border-red-500" : "border-zinc-300"
//                       } items-center text-center rounded-lg h-auto`}
//                     >
//                       {isChecked ? (
//                         <div className="-m-10">
//                           <img
//                             src={sharemywork}
//                             alt=""
//                             className="w-[200px] mx-auto"
//                           />
//                         </div>
//                       ) : (
//                         <img
//                           src={sharemywork}
//                           alt=""
//                           className="w-[200px] mx-auto"
//                         />
//                       )}
//                       {isChecked ? (
//                         <>
//                           {formData.checkbox2 && (
//                             <p className="text-center p-2 text-gray-400 mt-6">
//                               With over 7 million shots from a vast community of
//                               designers. Dribbble is the leading source for
//                               design inspiration.
//                             </p>
//                           )}
                          
//                         </>
//                       ) : (
//                         <></>
//                       )}
//                       <input
//                         type="checkbox"
//                         name="checkbox2"
//                         className="bg-rose-800 rounded-full w-5 h-5"
//                         onChange={changeHandler}
//                         checked={formData.checkbox2}
//                       />
//                     </div>
//                     <div
//                       className={`w-64 border-2 border-solid ${
//                         isChecked ? "border-red-500" : "border-zinc-300"
//                       } items-center text-center rounded-lg h-auto`}
//                     >
//                       {isChecked ? (
//                         <div className="-m-10">
//                           <img
//                             src={sharemywork}
//                             alt=""
//                             className="w-[200px] mx-auto"
//                           />
//                         </div>
//                       ) : (
//                         <img
//                           src={sharemywork}
//                           alt=""
//                           className="w-[200px] mx-auto"
//                         />
//                       )}
//                       {isChecked ? (
//                         <>
//                         {formData.checkbox3 &&(
//                           <p className="text-center p-2 text-gray-400 mt-6">
//                             With over 7 million shots from a vast community of
//                             designers. Dribbble is the leading source for design
//                             inspiration.
//                           </p>
//                         )
                          
//                         }
                          
//                         </>
//                       ) : (
//                         <></>
//                       )}
//                       <input
//                         type="checkbox"
//                         name="checkbox3"
//                         className="bg-rose-800 rounded-full w-5 h-5"
//                         onChange={changeHandler}
//                         checked={formData.checkbox3}
//                       />
//                     </div>
//                   </div>

//                   <div className="mt-10 items-center mx-auto text-center">
//                     <p className="font-bold pb-4">
//                       Anything else? You can select multiple
//                     </p>

//                     <button
//                       type="sumbit"
//                       className="bg-rose-800 items-center mx-auto text-center justify-center flex p-2.5 px-4 w-1/4 text-white rounded-lg"
//                     >
//                       Finish
//                     </button>

//                     <p className=" text-gray-500 pt-4">Or Press RETURN</p>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )} */}

// {step === 2 && (
//   <>
//     <div className="flex flex-col justify-center items-center bg-neutral-50">
//       <div className="mx-auto w-11/12 max-w-[450px] md:w-full md:max-w-none md:mx-0 items-center">
//         <div className="mt-10 ml-60">
//           <button
//             onClick={prevStep}
//             className="p-3 text-white bg-slate-200 rounded-lg text-center -ml-80"
//           >
//             <SlArrowLeft className="text-gray-400 text-2xl" />
//           </button>
//         </div>
//         <h1 className="font-bold text-2xl text-center">
//           What brings you to Dribbble?
//         </h1>
//         <p className="text-gray-400 pt-3 items-center text-center">
//           Select the options that best describe you. Don't worry, you can
//           explore other options later.
//         </p>

//         <div className="flex flex-wrap md:gap-y-4 items-center mt-6 mx-auto justify-center gap-x-4 pt-10">
//           {[1, 2, 3].map((index) => (
//             <div
//               key={index}
//               className={`w-64 border-2 border-solid ${
//                 formData[`checkbox${index}`] ? "border-red-500" : "border-zinc-300"
//               } items-center text-center rounded-lg h-auto`}
//             >
//               {formData[`checkbox${index}`] ? (
//                 <div className="-m-10">
//                   <img src={sharemywork} alt="" className="w-[200px] mx-auto" />
//                 </div>
//               ) : (
//                 <img src={sharemywork} alt="" className="w-[200px] mx-auto" />
//               )}
//               {formData[`checkbox${index}`] && (
//                 <p className="text-center p-2 text-gray-400 mt-6">
//                   With over 7 million shots from a vast community of designers,
//                   Dribbble is the leading source for design inspiration.
//                 </p>
//               )}
//               <input
//                 type="checkbox"
//                 name={`checkbox${index}`}
//                 className="bg-rose-800 rounded-full w-5 h-5"
//                 onChange={changeHandler}
//                 checked={formData[`checkbox${index}`]}
//               />
//             </div>
//           ))}
//         </div>

//         <div className="mt-10 items-center mx-auto text-center">
//           <p className="font-bold pb-4">Anything else? You can select multiple.</p>

//           <button
//             type="submit"
//             className="bg-rose-800 items-center mx-auto text-center justify-center flex p-2.5 px-4 w-1/4 text-white rounded-lg"
//           >
//             Finish
//           </button>

//           <p className="text-gray-500 pt-4">Or Press RETURN</p>
//         </div>
//       </div>
//     </div>
//   </>
// )}






//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProfileUpload;
