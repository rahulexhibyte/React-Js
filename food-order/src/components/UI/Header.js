import React from "react";
import { useHistory } from "react-router-dom";
import Icon from "@ant-design/icons";
import { ReactComponent as userSvg } from "../../assets/svg/user.svg";

import CartButton from "./CartButton";

const Header = (props) => {
  const history = useHistory();
  const logOutHandler = () => {
    localStorage.removeItem("isLogin");
    history.push("/");
  };

  return (
    <>
      <header className="header-part">
        <label className="company-title">Cheesee &amp; Spices</label>
        <div className="heder-subpart">
          <CartButton onCartClick={props.onCartClick}></CartButton>
          <Icon
            component={userSvg}
            className="profile-icon"
            onClick={() => {
              history.push("/profile");
            }}
          />
          <span className="logout-txt" onClick={logOutHandler}>
            Logout
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
