import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContextContext";

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, userData, setUserData, setIsLoggedIn, backendUrl } =
    useContext(AppContext);

  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0">
      <img src={assets.logo} alt="logo" className="w-28 sm:w-32" />
      {userData ? (
        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-black text-white relative group">
          {userData?.name[0].toUpperCase()}
          <div className="hidden group-hover:block absolute top-0 right-0 z-10 text-black pt-10 rounded">
            <ul className="list-none m-0 p-2 bg-gray-100 text-sm rounded">
              <li className="py-1 px-2 rounded hover:bg-gray-200 cursor-pointer">
                Verify email
              </li>
              <li className="py-1 px-2 rounded hover:bg-red-200 cursor-pointer pr-10">
                Logout
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all"
        >
          Login <img src={assets.arrow_icon} alt="arrow" />
        </button>
      )}
    </div>
  );
}

export default Navbar;
