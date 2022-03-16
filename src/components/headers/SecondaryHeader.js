import React, {Component} from 'react';
import {RiSearchEyeLine} from "react-icons/ri";

class SecondaryHeader extends Component {
    render() {
        return (
            <div className='sticky-top' style={{background: '#EEF1FB'}}>
                <h3 style={{
                    margin: '5%'
                }}>Empl<RiSearchEyeLine/>oyee</h3>
            </div>
        );
    }
}

export default SecondaryHeader;