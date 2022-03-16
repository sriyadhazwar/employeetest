import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Card extends Component {
    render() {

        const {dataLink, dataId, dataTitleName, dataImg, dataTitle, dataText} = this.props
        return (

            <div id={dataId} className="card dashboardCard dashboardCustomCard">
                <img className="card-img-top dashboardCustomImgCard" src={dataImg} alt="Card image cap"/>
                <span style={{
                    textTransform: 'capitalize',
                    fontWeight: 500,
                    fontSize: 14 + "px"
                }}>{dataTitleName}</span>
                <div className="card-title dashboardCustomCardTitle">{dataTitle}</div>
                <div className="card-body dashboardCustomCardBody">
                    <p className="card-text dashboardCustomCardText">{dataText}</p>
                </div>
                <Link to={`/user/${dataLink}`} className='stretched-link'/>
            </div>
        );
    }
}

export default Card;