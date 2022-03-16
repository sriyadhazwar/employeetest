import React, {Component} from 'react';
import Footer from "../components/footers/Footer";
import User from "../variables/User";


class UserView extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <User urlID={this.props.match.params.userID}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default UserView;