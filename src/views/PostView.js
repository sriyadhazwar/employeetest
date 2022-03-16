import React, {Component} from 'react';
import '../assets/css/Post.css'
import UserPost from "../variables/UserPost";
import AlternateHeader from "../components/headers/AlternateHeader";
import '../assets/css/Comment.css'

class PostView extends Component {
    render() {
        return (
            <div>
                <AlternateHeader/>
                <UserPost urlID={this.props.match.params.userID}/>
            </div>
        );
    }
}

export default PostView;