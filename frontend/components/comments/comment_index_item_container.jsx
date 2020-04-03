import React from "react";
import {connect} from "react-redux";
import CommentIndexItem from "./comment_index_item";
import { fetchUsers } from "../../actions/session_actions";

const msp = state => {
    // debugger
    return ({
        currentUser: state.entities.users[state.session.id],
        // commentAuthor: state.entities.users[comment.user_id]
    })
}

const mdp = dispatch => {
    return({
        getUsers: () => dispatch(fetchUsers())
    })
}

export default connect(msp, mdp)(CommentIndexItem);