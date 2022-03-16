import React, {Component} from 'react';
import {RiSearchEyeLine} from "react-icons/ri";

class Header extends Component {
    render() {
        const {btnStatus, inputHandler, inputValue, searchButton} = this.props
        return (
            <div className='sticky-top' style={{background: '#EEF1FB'}}>
                <h3 style={{
                    margin: '5%'
                }}>Empl<RiSearchEyeLine/>oyee</h3>
                <div className="row justify-content-md-center">
                    <div className='col'/>
                    <div className='col-8'>
                        <input name='inputVal' placeholder='Looking for someone...?' type="text"
                               className="form-control dashboardCustomInput" onChange={inputHandler}
                               value={inputValue}
                        />
                    </div>
                    <div className='col'>
                        <button disabled={btnStatus} onClick={() => searchButton(inputValue)}
                                className="btn btn-block dashboardCustomBtn">
                            <RiSearchEyeLine/></button>
                    </div>
                    <div className='col'/>
                </div>
            </div>
        );
    }
}

export default Header;