import { FooterLink2 } from "../../data/foote-link";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram,FaRegLifeRing } from "react-icons/fa6";
// import { FaRegLifeRing } from "react-icons/fa6";
const Resources = [
  "Go prol",
  "Explore design work",
  "Design blog",
  "Overtime prodcast",
  "Playoffs",
  "Weekly Warm-Up",
  "Refer a Friend",
  "Code of conduct",
];
const Plans = ["Post a job opening", "Post a freelance project", "Search for designers",""];
const Community = ["Advertise with us"];

const Footer = () => {
  return (
    <div className="bg-gray-100  h-screen">
      <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent  leading-6 mx-auto relative py-14">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-gray-400">
          {/* Section 1 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
            <div className="w-[40%] flex flex-col gap-3 lg:w-[35%] mb-7 lg:pl-0 ">
              {/* <img src={Logo} alt="" className="object-contain" /> */}
              <h1 className="italic text-pink-500 text-[16px] text-xl   ">
              dribbble
              </h1>
              <div className="flex flex-col gap-2 text-lg w-full">
                
                <div>Dribbble is the world's learning
                  community for creatives to share.grow and get hired.
                </div>
              </div>
              <div className="flex gap-3 text-lg">
                <FaRegLifeRing/>
                <FaTwitter />
                <FaFacebook />
                <FaInstagram/>

                <FaGoogle />
                <FaYoutube />
              </div>
              <div></div>
            </div>




            <div className="w-[58%] lg:w-[22%] mb-7 lg:pl-0 mr-24">
              <h1 className="text-gray-900 font-semibold text-[18px] ">
                For designers
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[15px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>

            </div>

            <div className="w-[58%] lg:w-[20%] mb-7 lg:pl-0  mr-2">
              <h1 className="text-gray-900 font-semibold text-[18px]">
                Hire designers
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[15px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <h1 className="text-gray-900 font-semibold text-[18px] mt-7">
                Brands
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                {Community.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[15px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Section 2 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-2">
            

           
            {FooterLink2.map((ele, i) => {
              return (
                <div key={i} className="w-[58%] lg:w-[25%] mb-7 lg:pl-0 ">
                  <h1 className="text-gray-900 font-semibold text-[18px]">
                    {ele.title}
                  </h1>
                  <div className="flex flex-col gap-2 mt-2">
                    {ele.links.map((link, index) => {
                      return (
                        <div
                          key={index}
                          className="text-[15px] cursor-pointer hover:text-black transition-all duration-200"
                        >
                          <Link to={link.link}>{link.title}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            

          
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap  items-center justify-between w-11/12 max-w-maxContent  mx-auto mt-24  pb-14 text-sm">

        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            <p className="text-lg text-black">2023 Dribbble.All rights reserved. </p>
          </div>

          <div className="text-center text-black">Made with ❤️ G M Faizy © 2024 Dibbble <span className="bg-pink-400 text-balance" style={{backgroundColor:"#f43f5e"}}> <FaRegLifeRing/></span></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;