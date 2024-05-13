import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { Link } from "react-router-dom";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("user"));

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/userbookings">Bookings</Link>
      </Menu.Item>

      <Menu.Item
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        <span className="text-slateblue">Logout</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className="header bg-white">
        <div className=" mx-auto p-2">
          <div className="flex justify-between">
            <h1>
              <b>
                <Link to="/" className="text-slateblue textColor">
                  DriveEz
                </Link>
              </b>
            </h1>
            {/* <Dropdown overlay={menu} placement="bottomCenter">
              <Button>{user.username}</Button>
            </Dropdown> */}
          
          </div>
        </div>
      </div>
      <div className=" mx-auto p-4">{props.children}</div>

      <div className="footer text-center">
        
      </div>
    </div>
  );
}

export default DefaultLayout;
