import React from "react";
import Logout from "../Form/ButtonLogout";

import {useSelector} from "react-redux";

export default function Header(){
    
    const {username} = useSelector(state => state.UserState.User?state.UserState.User.infoUser?state.UserState.User.infoUser:{}:{});

    return (
        <div className="row">
        <div className="col-4" style={{backgroundColor:"#2d2c31"}}>
            <div className="d-block m-3">
                Hello {username}
            </div>
        </div>
        <div className="col-8" style={{backgroundColor:"#2d2c31"}}>
          <header>
              <div className="d-flex justify-content-end">
                  <div className="d-block m-3">
                      <Logout />
                  </div>
                  <div className="d-block m-3">
                      <button className="btn btn-outline-success">Daftar</button>
                  </div>
              </div>
          </header>
        </div>
      </div>
    );
}