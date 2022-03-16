import React, {Component} from 'react';
import '../../assets/css/User.css'

class UserCard extends Component {
    render() {
        const {dataImg, dataName, dataEmail, dataGender, dataPhone, dataBirth, dataReg} = this.props
        return (
            <div>
                <div className="card customCard">
                    <img className="card-img-top customImgCard" src={dataImg} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 style={{
                            textTransform: 'capitalize'
                        }}>{dataName}</h5>
                        <div className="row" style={{textAlign: 'left'}}>
                            <div className="col-12 customTag">
                                <p>Email</p>
                            </div>
                            <div className="col-12 customInfo">
                                <p>{dataEmail}</p>
                            </div>
                            <div className="col-6 customTag">
                                <p>Gender</p>
                            </div>
                            <div className="col-6 customTag">
                                <p>Phone</p>
                            </div>
                            <div className="col-6 customInfo">
                                <p>{dataGender}</p>
                            </div>

                            <div className="col-6 customInfo">
                                <p>{dataPhone}</p>
                            </div>
                            <div className="col-6 customTag">
                                <p>Birth</p>
                            </div>
                            <div className="col-6 customTag">
                                <p>Registration</p>
                            </div>
                            <div className="col-6 customInfo">
                                <p>{new Date().toLocaleDateString("en-US", dataBirth)}</p>
                            </div>
                            <div className="col-6 customInfo">
                                <p>{new Date().toLocaleDateString("en-US", dataReg)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCard;