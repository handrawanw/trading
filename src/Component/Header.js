import React from "react";
import Logout from "../Form/ButtonLogout";
import TOPUP from "../Form/ButtonTopup";

import {useSelector} from "react-redux";

export default function Header(){
    
    const {username} = useSelector(state => state.UserState.User?state.UserState.User.infoUser?state.UserState.User.infoUser:{}:{});

    return (
        <div className="row p-1">
            <div className="col-4" style={{backgroundColor:"#2d2c31"}}>
                <div className="d-block p-3">
                    Hello {username}
                </div>
            </div>
            <div className="col-8" style={{backgroundColor:"#2d2c31"}}>
                <header>
                    <div className="d-flex justify-content-end">
                        <div className="d-block p-3">
                            <Logout />
                        </div>
                        <div className="d-block p-3">
                            <TOPUP />
                        </div>
                    </div>
                </header>
            </div>
      </div>
    );
}