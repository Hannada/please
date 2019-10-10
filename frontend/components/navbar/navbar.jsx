import React from "react"; 
import { Link } from "react-router-dom";
import { sessionLinks } from "./session_links";
import { logoutLinks } from "./logout_links";

class Navbar extends React.Component {
    constructor(props){
        super(props)
    }



    render() {
        if (user) {
            return sessionLinks
        } else {
            return logoutLinks
        }
    }

}

export default Navbar; 