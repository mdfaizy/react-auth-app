import { toast } from "react-hot-toast";

import { setLoading, setToken } from "../slices/authSlice";
// import { resetCart } from "../../slices/cartSlice"
// import { setUser } from "../slices/profileSlice";
import { apiConnector } from "./apiConnector";
import { endpoints } from "./api";
import { setAvatar,setLocation,toggleOption } from "../slices/profileSlice";

const { SIGNUP_API, LOGIN_API ,VERIFY_USER,PROFILE_UPLOAD} = endpoints;

export const sendOtp = async (email, navigate) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", VERIFY_USER, {
        email,
        checkUserPresent: true,
      });
      console.log("SENDOTP API RESPONSE............", response);

      console.log(response.data.success);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("OTP Sent Successfully");
      navigate("/verify-email");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error("Could Not Send OTP");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
};

export function signUpFrom(name, username, email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        name,
        username,
        email,
        password,
      });

      console.log("SIGNUP API RESPONSE............", response.data);

      if (!response.data.success) {
        throw new Error(response.data.message);
       
      }
      // window.alert(response.message);
      toast.success("Check email verify");
      navigate("/login");
    } catch (error) {
      // window.alert(error.message);
      console.log("SIGNUP API ERROR............", error);
      toast.error("Send email verifiy failed");
      navigate("/signup");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

// export function login(email, password, navigate) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...");
//     dispatch(setLoading(true));
//     try {
//       const response = await apiConnector("POST", LOGIN_API, {
//         email,
//         password,
//       });

//       console.log("LOGIN API RESPONSE............", response);

//       if (!response.data.success) {
//         throw new Error(response.data.message);
//       }

//       toast.success("Login Successful");
//       dispatch(setToken(response.data.token));
//       const userImage = response.data?.user?.image
//         ? response.data.user.image
//         : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`;
//       dispatch(setUser({ ...response.data.user, image: userImage }));

//       localStorage.setItem("token", JSON.stringify(response.data.token));
//       localStorage.setItem("user", JSON.stringify(response.data.user));
//       navigate("/dashboard/my-profile");
//     } catch (error) {
//       console.log("LOGIN API ERROR............", error);
//       toast.error("Login Failed");
//     }
//     dispatch(setLoading(false));
//     toast.dismiss(toastId);
//   };
// }






export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });

      console.log("LOGIN API RESPONSE:", response);

      if (!response.data.success) {
        if (response.data.message === "User is not registered") {
          throw new Error("User is not registered. Please sign up.");
        }  else {
          throw new Error(response.data.message);
        }
      }

      toast.success("Login Successful");
      dispatch(setToken(response.data.token));
      // const userImage = response.data?.user?.image
      //   ? response.data.user.image
      //   : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`;
      // dispatch(setUser({ ...response.data.user, image: userImage }));

      localStorage.setItem("token", JSON.stringify(response.data.token));
      // localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/");
    } catch (error) {
      console.error("LOGIN API ERROR:", error);
      toast.error(error.message || "Login Failed");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}



export function profile(profile, location,chooseOption, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", PROFILE_UPLOAD, {
        profile, location,chooseOption
      });

      console.log("PROFILE API RESPONSE:", response);

      if (!response.data.success) {
        {
          throw new Error(response.data.message);
        }
      }

      toast.success("PROFILE Successful");
      dispatch(setToken(response.data.token));
      

      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/designerChoose");
    } catch (error) {
      console.error("Profile API ERROR:", error);
      toast.error(error.message || "Profile upload Failed");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}




export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    // dispatch(setUser(null))
    // dispatch(resetCart())
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}