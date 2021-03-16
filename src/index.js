import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () =>{
    return (
        <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail 
            author="Bob" 
            timeAgo="Today at 4:45pm" 
            commentText="Hello there!" 
            avatar={faker.image.image()}
            />
        </ApprovalCard>

        <ApprovalCard> 
          <CommentDetail 
            author="Joey" 
            timeAgo="Today at 2:00am" 
            commentText="Comment 2" 
            avatar={faker.image.image()}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail 
               author="Wes" 
            timeAgo ="Yesterday at 5:23pm" 
            commentText="Comment 3" 
            avatar={faker.image.image()}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail 
            author="Charles" 
            timeAgo ="Yesterday at 5:43pm" 
            commentText="Comment 4" 
            avatar={faker.image.image()}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail 
            author="Enoch"    
            timeAgo ="Yesterday at 6:23pm" 
            commentText="Comment 5" 
            avatar={faker.image.image()}
          />
        </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))