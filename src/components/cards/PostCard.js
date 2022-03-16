import React, {Component} from 'react';
import {FcComments, FcLike} from 'react-icons/fc'
import {Link} from 'react-router-dom'


class PostCard extends Component {
    render() {
        const {dataPopup, dataPostID, dataPostOwnerId, dataPostImg, dataPostOwner, dataPostArticle, dataPostTag, dataPostLike, dataPostDate} = this.props
        console.log("id :", dataPostID)
        return (
            <div className="card customPostCard" style={{width: 18 + "rem"}}>
                <img className="card-img-top customPostImgCard" src={dataPostImg} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`/user/${dataPostOwnerId}`}><img className="customImgInCard" src={dataPostOwner}
                                                                   alt="Card image cap"/></Link>
                    </h5>
                    <p className="card-text">{dataPostArticle}</p>
                    <div className="row justify-content-center">
                        {dataPostTag.map((tags, index) =>
                            <a href={`/tag/${tags}/post`} key={index}
                               className='btn btn-sm btn-outline-dark customPostTag'>{tags}</a>
                        )}
                    </div>
                </div>
                <div className="card-footer text-muted">
                    <div className="row">
                        <div className="col-2" style={{
                            textAlign: 'left',
                            marginBottom: '5%'
                        }}><a onClick={() => {
                            dataPopup(dataPostID)
                        }} className='customCommentIcon'><FcComments/></a>

                        </div>
                        <div className="col customLikeIcon" style={{textAlign: 'left'}}><FcLike/> {dataPostLike}</div>
                        <div className="col"
                             style={{textAlign: 'right'}}>{new Date().toLocaleDateString("en-US", dataPostDate)}</div>
                    </div>
                </div>
            </div>

        );
    }
}

export default PostCard;