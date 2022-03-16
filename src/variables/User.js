import React, {Component} from 'react';
import {getUserById} from "../apis/dataApi";
import UserCard from "../components/cards/UserCard";
import MapCard from "../components/cards/mapCard";
import animLoading from "../assets/img/animLoading.gif"
import Swal from "sweetalert2";
import {connect} from "react-redux";


class User extends Component {

    state = {
        id: this.props.urlID,
        isLoaded: false
    }

    getUserbyIDData = (id) => {
        getUserById(id)
            .then((userData) => {
                this.props.UserData(userData)
                this.setState({
                    isLoaded: true,
                });
            })
            .catch((e) => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            });
    };

    componentDidMount() {
        this.getUserbyIDData(this.state.id)
    };

    render() {
        const user = this.props.userData
        const location = user.location
        return (
            <div className='container'>
                <div style={{marginTop: '4%'}}/>
                {this.state.isLoaded ?
                    <div className="row">
                        <div className="col-4">
                            <UserCard
                                dataID={user.id}
                                dataImg={user.picture}
                                dataName={`${user.title}. ${user.firstName} ${user.lastName}`}
                                dataEmail={user.email}
                                dataGender={user.gender}
                                dataPhone={user.phone}
                                dataBirth={user.dateOfBirth}
                                dataReg={user.registerDate}
                            />
                        </div>
                        <div className="col-8">

                            <MapCard
                                dataID={user.id}
                                dataMap={`https://maps.googleapis.com/maps/api/staticmap?markers=${location.state},${location.country},${location.street},${location.city}&center=${location.state},${location.country},${location.street},${location.city}&zoom=8&size=600x300&key=AIzaSyD9dyB7_5evAcVtSOf92NlVO8Cp0OdEwTA`}
                                dataAddress={location.country + location.state + location.city + location.street}
                            />
                        </div>
                    </div>
                    : <img src={animLoading} alt="Loading"/>}

            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        userData: state.fetchReducer.FetchAction.fetchData

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        UserData: (data) => {
            dispatch({
                type: 'GET',
                JsonData: data
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
