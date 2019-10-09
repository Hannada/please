import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login, checkEmail } from "../../actions/session_actions";
import IdentifierForm from "./identifier_form";

const msp = ({ errors }) => {
    return ({
        errors: errors.session,
        formType: "Next Roll",
        navLink: <Link to="/signup">Create Account</Link>

    })
}

const mdp = dispatch => {
    return ({
        verifyForm: email => dispatch(checkEmail(email))
    })
}


export default connect(msp, mdp)(IdentifierForm);