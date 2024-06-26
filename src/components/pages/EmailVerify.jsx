import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import emailVerifyIcon from "../../assets/emailVerify.png";
const EmailVerify = () => {
 
  const [validUrl, setValidUrl] = useState(true);
  const param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dribbble-node-1.onrender.com/api/v1/auth/user/${param.id}/${param.token}`
        );

        console.log(response);
        if (response.success) {
          setValidUrl(response);
          setValidUrl(true);
        } else {
          console.error("Failed to fetch  data");
        }
      } catch (error) {
        console.error("Error  data:", error);
      }
    };
    fetchData();
  }, [param]);

  return (
    <>
      {validUrl ? (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">
            Email verified successfully
          </h1>
          <div>
            <img src={emailVerifyIcon} className="w-20 " />
          </div>
          <Link to="/login">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
          </Link>
        </div>
      ) : (
        <h1 className="text-3xl font-bold text-red-500">404 Not Found</h1>
      )}
    </>
  );
};

export default EmailVerify;
