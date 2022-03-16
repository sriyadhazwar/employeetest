import React, {Component} from 'react';
import UsersList from "../variables/UsersList";
import '../assets/css/Dashboard.css'
import Footer from "../components/footers/Footer";

class DashboardView extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <UsersList/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default DashboardView;