import React, {Component} from 'react';
import {RiArticleLine, RiSearchEyeLine} from "react-icons/ri";
import {Link} from 'react-router-dom'

class MapCard extends Component {
    render() {
        const {dataID, dataAddress, dataMap} = this.props
        return (
            <div>
                <div className="card customMapCard">
                    <div className="card-body">
                        <h5 style={{textAlign: 'left'}}>Address</h5>
                        <div className="row" style={{textAlign: 'left'}}>
                            <div className="col-12 customMapTag">
                                <p>{dataAddress}</p>
                            </div>
                            <div className="col-12 customInfo">
                                <img className="card-img-top customMapImgCard" src={dataMap} alt="Card image cap"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card customMapCard">
                    <div className="row">
                        <div className="col-3">
                            <Link to={`/`}
                                  className="btn btn-lg btn-outline-dark customBtn btn-block"><RiSearchEyeLine/>
                            </Link>
                        </div>
                        <div className="col"/>
                        <div className="col-6">
                            <Link to={`/user/${dataID}/post`}
                                  className="btn btn-lg btn-outline-dark customBtn btn-block"><RiArticleLine/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MapCard;