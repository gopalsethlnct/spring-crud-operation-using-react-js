import React, { useEffect, useState } from "react";
import { HomePage } from "./HomePage";

import { User } from "./User";


export default function LoginHome() {
    
    let [showPage, setShowPage] = useState(true)

    function setlogin() {
        setShowPage(false)
    }
    return (
        <div>
            {
                showPage ? <HomePage setLogin={setlogin} /> :  <User/>
                    
                

            }
        </div>
    );
}