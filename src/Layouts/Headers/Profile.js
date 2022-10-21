import React, { useState } from "react";
import clsx from "clsx";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();
  const [showDropdown, setDropdown] = useState(false);
  const handleToggleDropdown = (e) => {
    e.preventDefault();
    setDropdown(showDropdown ? false : true);
  };
  console.log(isAuthenticated)
  return (
    <>
      {isAuthenticated ? (
        <div className="header__profile">
          <a href="#" onClick={handleToggleDropdown}>
            <img src={user.picture} />
          </a>
          <div className={clsx("header__profile--inner", showDropdown && "open")}>
            <ul>
              <li>
                <a href="">Cá nhân</a>
              </li>
              <li>
                <a href="">Đăng xuất</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="header__profile">
          <a href="#" onClick={handleToggleDropdown}>
            <img src="https://cdn-icons-png.flaticon.com/512/1946/1946392.png" />
          </a>
          <div className={clsx("header__profile--inner", showDropdown && "open")}>
            <ul>
              <li>
                <a href="">Cá nhân</a>
              </li>
              <li>
                <a href="">Đăng xuất</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
