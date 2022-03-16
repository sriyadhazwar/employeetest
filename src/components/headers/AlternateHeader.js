import React, {Component} from 'react';
import {RiSearchEyeLine} from "react-icons/ri";
import {Link} from 'react-router-dom'

class AlternateHeader extends Component {
    render() {
        return (
            <div className='sticky-top' style={{background: '#EEF1FB', padding: '1%'}}>
                <Link to={'/'}><h3 className='customHeaderLink'>Emplo<RiSearchEyeLine/>oyee</h3></Link>
            </div>
        )
    }
}

export default AlternateHeader;