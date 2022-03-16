import React, {Component} from 'react';
import Card from "../components/cards/Card";
import {getUsers} from "../apis/dataApi";
import animLoading from "../assets/img/animLoading.gif"
import Swal from "sweetalert2";
import {connect} from "react-redux";
import Header from "../components/headers/Header";

class UsersList extends Component {

    state = {
        isLoaded: false,
        filtered: [],
        inputVal: ''
    }

    inputHandler = (e) => {
        const name = e.target.name
        this.setState({
            [name]: e.target.value,
        })
        if (e.target.value === '') {
            this.onSearchNull()
        }
    }

    getUsersData = () => {
        getUsers()
            .then((usersData) => {
                this.props.UserData(usersData)
                this.setState({
                    isLoaded: true,
                    filtered: usersData,
                });
            })
            .catch((e) => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            });
    };

    onSearch = (name) => {
        this.setState({
            filtered: this.props.usersData.filter((user) => {
                return (user.title.toLowerCase() + user.firstName.toLowerCase() + user.lastName.toLowerCase()).includes(name.toLowerCase());

            })
        })
    }

    onSearchNull = () => {
        this.setState({
            filtered: this.props.usersData
        })
    }


    componentDidMount() {
        this.getUsersData()
    };

    render() {
        return (
            <div><Header searchButton={this.onSearch} inputValue={this.state.inputVal}
                         inputHandler={this.inputHandler} btnStatus={!this.state.isLoaded}/>
                <div className="row justify-content-md-center">

                    {this.state.isLoaded ?
                        this.state.filtered.map(user =>
                            <Card
                                dataId={user.id}
                                dataImg={user.picture}
                                dataTitleName={user.title}
                                dataTitle={user.firstName + " " + user.lastName}
                                dataText={user.email}
                                dataLink={user.id}
                            />
                        ) : <img src={animLoading} alt="loading"/>}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        usersData: state.fetchReducer.FetchAction.fetchData

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);