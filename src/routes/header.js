import React, { useContext } from "react";
import UserContext from "../context/usercontext.js";


const Header = () => {
  const {userInfo} = useContext(UserContext)
  return (
    <div>
      {userInfo?.name}
    </div>
  );
};

export default Header;