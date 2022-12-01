import React from "react";
import Input from "../Input";

function Header() {

    return (
        <div className="row d-flex justify-content-between align-items-center">
            <div className="col-4">
            <Input/>
            </div>
            <div className="col-8 mt-3 text-end">
            <h4 className="">weather<span className="fw-bold">Forecast</span></h4>
            </div>

        </div>
    )
}

export default Header