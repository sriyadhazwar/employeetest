import React, {Component} from 'react';
import '../assets/css/Error.css'
import {RiSearchEyeLine} from "react-icons/ri";
import {Link} from 'react-router-dom'

class Notfound extends Component {
    render() {
        return (
            <div>
                <div class="mainbox">
                    <div class="err">4<RiSearchEyeLine/>4</div>
                    <div class="msg">
                        <h1>Nothing Found</h1>
                        <Link to={'/'} className="btn btn-block btn-outline-danger customErrorBtn">Home</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notfound;