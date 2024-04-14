// import { useRef, useState, useEffect } from "react";
// import { VscDashboard, VscSignOut } from "react-icons/vsc";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import useOnClickOutside from "../components/hooks/useOnClickOutside";
// import { logout } from "../services/authApi";
// import axios from "axios";
// // import useProfileImage from "../hooks/useProfileImage";
// const ProfileDropdown = () => {
//   const [profileImage, setProfileImage] = useState(null);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const ref = useRef(null);
//   useOnClickOutside(ref, () => setOpen(false));
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/v1/profile/profileId"
//         );
//         console.log("frtyhtht", response.data.data[0].image);
//         if (response.data) {
//           setProfileImage(response.data.data[0].image); // Set profile image URL
//         }
//       } catch (error) {
//         console.error("Error fetching profile data:", error);
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <button className="relative" onClick={() => setOpen(true)}>
//       <div className="flex items-center gap-x-1">
// <img
//           src={profileImage || ""}
//           // alt="Profile"
//           className="aspect-square w-[30px] rounded-full object-cover"
//         />
//       </div>
//       {open && (
//         <div
//           onClick={(e) => e.stopPropagation()}
//           className="absolute top-[148%] -right-10 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
//           ref={ref}
//         >
//           <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
//             <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
//               <VscDashboard className="text-lg" />
//               Dashboard
//             </div>
//           </Link>
//           <div
//             onClick={() => {
//               dispatch(logout(navigate));
//               setOpen(false);
//             }}
//             className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
//           >
//             <VscSignOut className="text-lg" />
//             Logout
//           </div>
//         </div>
//       )}
//     </button>
//   );
// };

// export default ProfileDropdown;














import { useRef, useState, useEffect } from "react";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { useDispatch, } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useOnClickOutside from "../components/hooks/useOnClickOutside";
import { logout } from "../services/authApi";
import axios from "axios";

const ProfileDropdown = () => {
  const [profileImage, setProfileImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dribbble-node-1.onrender.com/api/v1/profile/profileId"
        );
        console.log("Profile Images:", response.data.data);

        if (response.data && response.data.data.length > 0) {
          // Get the last uploaded profile image
          const lastProfileImage = response.data.data[response.data.data.length - 1].image;
          console.log("Last Profile Image:", lastProfileImage);
          setProfileImage(lastProfileImage); // Set profile image URL
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <button className="relative" onClick={() => setOpen(true)}>
      <div className="flex items-center gap-x-1">
        <img
          src={profileImage || ""}
          alt="Profile"
          className="aspect-square w-[30px] rounded-full object-cover"
        />
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[148%] -right-10 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
          ref={ref}
        >
          <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
              <VscDashboard className="text-lg" />
              Dashboard
            </div>
          </Link>
          <div
            onClick={() => {
              dispatch(logout(navigate));
              setOpen(false);
            }}
            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </button>
  );
};

export default ProfileDropdown;
