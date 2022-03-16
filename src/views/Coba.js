import React, {Component} from 'react';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import {getPostComment} from "../apis/dataApi";
import '../assets/css/Comment.css'

class Coba extends Component {


    state = {
        commentsData: [],
        isLoaded: false
    }

    getPostCommentData = (id) => {
        this.commentPopUp()
        getPostComment(id)
            .then((commentsData) => {
                this.setState({
                    isLoaded: true,
                    commentsData,
                });
                this.commentPopUp()
            })
            .catch((e) => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            });
    };
    commentPopUp = () => {
        const MySwal = withReactContent(Swal)
        MySwal.fire(
            <div>
                {this.state.isLoaded ?
                    this.state.commentsData.map(comment =>
                        <div className="card customCommentCard">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-3" style={{textAlign: 'left !important'}}>
                                        <img style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '10em'
                                        }}
                                             src={comment.owner.picture} alt="profile"/>
                                    </div>
                                    <div className="col-9" style={{textAlign: 'left !important'}}>
                                        <p style={{
                                            fontSize: '14px',
                                            fontWeight: 'bolder',
                                            textAlign: 'left'
                                        }}
                                        >{`${comment.owner.title}. ${comment.owner.firstName} ${comment.owner.lastName}`}</p>
                                        <p style={{
                                            fontSize: '10px',
                                            marginTop: '-10px',
                                            textAlign: 'left'
                                        }}>{comment.message}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer customCommentFooter">
                                <p>{new Date().toLocaleDateString("en-US", comment.publishDate)}</p>
                            </div>
                        </div>
                    ) : <p>Loading</p>}
            </div>
        )
    }

    render() {
        return (
            <div>
                <button onClick={() => this.getPostCommentData('SFAt3mJK0qu4QOd9LgSX')}>click</button>
            </div>)

    }
}

export default Coba;