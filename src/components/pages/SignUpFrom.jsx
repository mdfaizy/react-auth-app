import signUpimg from "../../assets/signUpimg.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSignupData } from "../../slices/authSlice";
import { signUpFrom ,sendOtp} from "../../services/authApi";

const SignUpFrom = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    userame: "",
    email: "",
    password: "",
  });

  const { name, username, email, password } = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const signupData = {
      ...formData,
    };

    dispatch(setSignupData(signupData));
    dispatch(signUpFrom(name, username, email, password, navigate));
    dispatch(setSignupData(signupData));
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate));

    // Reset form fields
    setFormData({
      name: "",
      username: "",
      email: "",
      password: "",
    });
  };





 
  

  return (
    <div className="mx-auto flex-wrap bg-neutral-50 grid min-h-[calc(100vh-3.5rem)] place-items-center">
      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-around  py-12 md:flex-row md:gap-y-0 md:gap-x-1">
<div className="bg-amber-200 min-h-screen flex justify-center items-center md:h-screen rounded-lg ">
          <div className="relative mx-auto w-11/12 max-w-[450px] md:w-full md:max-w-none md:mx-0 items-center ">
            <img
             src={signUpimg}
              alt="Pattern"
              width={450}
              height={804}
              className="ite"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-[450px] md:mx-0 relative">
          <h1 className="text-3xl font-bold">Sign up to Dribbble</h1>
          <div className="flex text-center items-center gap-4 mt-5">
            <button className="bg-blue-500 text-white text-small p-2   rounded-lg w-80">
              Sign up with Google
            </button>
            <p className="bg-gray-100 px-4 py-2 rounded-lg">A</p>
          </div>
          <p className="mt-5">Or</p>

          <form onSubmit={handleOnSubmit}>
            <div className="flex gap-x-4 mt-5">
              <label>
                <p className="mb-1 text-[1.02rem] leading-[1.375rem] font-bold ">
                  Name <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleOnChange}
                  placeholder="Enter name"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full rounded-[0.5rem] bg-neutral-200 p-[12px] pr-10 text-richblack-5 outline-none"
                />
              </label>
              <label>
                <p className="mb-1 text-[1.02rem] leading-[1.375rem] font-bold ">
                  Username <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleOnChange}
                  placeholder="Enter last name"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full rounded-[0.5rem] bg-neutral-200 p-[12px] pr-10 outline-none"
                />
              </label>
            </div>
            <div className="py-6">
              <label className="w-full  ">
                {/* <p className="mb-1 text-[1.02rem] leading-[1.375rem] "> */}
                <p className="mb-1 text-[1.02rem] leading-[1.375rem] font-bold ">
                  Email <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  placeholder="Enter name"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full rounded-[0.5rem] bg-neutral-200 p-[12px] outline-none "
                />
              </label>
            </div>

            <label>
              <p className="mb-1 text-[1.02rem] leading-[1.375rem] font-bold ">
                Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="text"
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="6+character"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-neutral-200 p-[9px] pr-10 outline-none"
              />
            </label>

            <fieldset className="mb-10 mt-5 w-full ">
              <div className="mt-4">
                <div className="flex">
                  <input
                    type="checkbox"
                    name="privacy"
                    id="privacy"
                    // checked={formData.comments}
                    // onChange={changeHandler}
                    className="h-4 w-16  mt-1 rounded"
                  />
                  <div className="flex flex-col pl-5">
                    <label
                      htmlFor="privacy"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      <p className="text-gray-500 font-bold">
                        Creating an account means you're okay white our{" "}
                        <span className="text-blue-600">
                          Terms of Service,Privacy Policy,
                        </span>{" "}
                        and our default{" "}
                        <span className="text-blue-600">
                          Notification Settings.
                        </span>
                      </p>
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="mb-4 flex gap-2 items-center flex-wrap">
              <button 
              style={{backgroundColor:"#f43f5e"}}
              className=" p-2.5 px-4 w-1/2 text-white rounded-lg">
                Create Account
              </button>

              <p className="font-bold">
                Already a member?
                <Link to="/login">
                  <span className="text-blue-600">Sign in</span>
                </Link>
              </p>
            </div>
            <p className="text-gray-600">
              This site is protected by reCAPTCHA and the Google{" "}
              <span className="text-blue-600">Privacy Policy</span> and{" "}
              <span className="text-blue-600">Treams of Service</span> apply
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpFrom;
