import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/authApi";
import SignUpimg from "../.././assets/signUpimg.png";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dispatch login action
      await dispatch(login(email, password, navigate));
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error
    }
  };

  return (
    <div className="mx-auto flex-wrap bg-neutral-50 grid min-h-[calc(100vh-3.5rem)] place-items-center">
      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-around  py-12 md:flex-row md:gap-y-0 md:gap-x-1 items-center">
        <div className="bg-amber-200 h-[60%] flex justify-center items-center md:h-screen rounded-lg">
          <div className="relative mx-auto w-11/12 max-w-[450px] md:w-full md:max-w-none md:mx-0   items-center">
            <img
              src={SignUpimg}
              alt="Pattern"
              width={450}
              height={604}
              className="ite"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-[450px] md:mx-0 relative">
          <h1 className="text-3xl font-bold">Sign In to Dribbble</h1>
          <form onSubmit={handleOnSubmit}>
            <label className="w-full  ">
              <p className="mb-1 text-[1.02rem] leading-[1.375rem] font-bold mt-5 ">
                Email <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter email"
                className="w-full rounded-[0.5rem] bg-neutral-200 p-[9px] outline-none "
              />
            </label>
            <label>
              <p className="mb-1 text-[1.02rem] leading-[1.375rem] font-bold mt-5">
                Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter password"
                className="w-full rounded-[0.5rem] bg-neutral-200 p-[9px] pr-10 outline-none"
              />
            </label>
            <button className="bg-rose-800 p-2.5 px-4 w-1/2 text-white rounded-lg mt-5 items-center justify-center">
              Sign In
            </button>
            <p className="font-bold pt-4">
              Create Account?
              <Link to="/signup">
                <span className="text-blue-600">Sign Up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
