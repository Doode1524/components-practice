import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return(
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.image()}/>
        </a>
        <div className="content">
            <a href="/" className="author">
                Bob
            </a>
            <div className="metadata">
                <span className="date">
                    Today at 6:00pm</span>
            </div>
            <div className="text">
                Nice blog post!
            </div>
        </div>
    </div>  
    )
}
export default CommentDetail