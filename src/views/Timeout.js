import React, {Component} from 'react';
import '../assets/css/Error.css'
import {RiSearchEyeLine} from "react-icons/ri";
import {Link} from 'react-router-dom'

class Timeout extends Component {
    render() {
        return (
            <div>
                <div class="mainbox">
                    <div class="err">5<RiSearchEyeLine/>4</div>
                    <div class="msg">
                        <h1>Connection Timeout</h1>
                        <Link to={'/'} className="btn btn-block btn-outline-danger customErrorBtn">Home</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timeout;