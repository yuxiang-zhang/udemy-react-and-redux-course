import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
    <div className="ui container comments">
        <ApprovalCard>
	        <CommentDetail 
		        author="Jane" 
		        avatar={faker.image.image()} 
		        timeAgo="Today at 4:45PM" 
		        content="some long story"
	        />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Sam" 
                avatar={faker.image.image()} 
                timeAgo="Today at 4:45PM" 
                content="some long story"
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Bill" 
                avatar={faker.image.image()} 
                timeAgo="Today at 4:45PM" 
                content="some long story"
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Elsa" 
                avatar={faker.image.image()} 
                timeAgo="Today at 4:45PM" 
                content="some long story"
            />
        </ApprovalCard>
	</div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));


