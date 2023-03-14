import './discussion.styles.scss';

// THIS COMPONENT IS EXPORTED TO TOPICS COMPONENT

const Discussion = () => {
    const directoryOfComments = [
        {
            id: 1,
            author: 'John Doe',
            comment: "I am John Doe's comment.",
            timeStamp: '8:00AM',
            dateStamp: '1/1/2023',
        },
        {
            id: 2,
            author: 'Jane Doe',
            comment: "I am Jane Doe's comment.",
            timeStamp: '9:00AM',
            dateStamp: '22/2/2023',
        },
        {
            id: 3,
            author: 'Jimmy Doe',
            comment: "I am Jimmy Doe's comment.",
            timeStamp: '8:00AM',
            dateStamp: '11/8/2023',
        },
        {
            id: 4,
            author: 'Jannette Doe',
            comment: "I am Jannette Doe's comment.",
            timeStamp: '8:00AM',
            dateStamp: '2/9/2023',
        },
        {
            id: 5,
            author: 'Josh Doe',
            comment: "I am Josh Doe's comment.",
            timeStamp: '8:00AM',
            dateStamp: '10/11/2023',
        },
        {
            id: 6,
            author: 'Josh Doe',
            comment: "I am Josh Doe's comment.",
            timeStamp: '8:00AM',
            dateStamp: '10/11/2023',
        },
        {
            id: 7,
            author: 'Josh Doe',
            comment: "I am Josh Doe's comment.",
            timeStamp: '8:00AM',
            dateStamp: '10/11/2023',
        },
        {
            id: 8,
            author: 'Josh Doe',
            comment: "I am Josh Doe's comment.",
            timeStamp: '8:00AM',
            dateStamp: '10/11/2023',
        },
        {
            id: 9,
            author: 'Josh Doe',
            comment: "I am Josh Doe's comment.",
            timeStamp: '8:00AM',
            dateStamp: '10/11/2023',
        },
    ];

    return (
        <div className="discussion-container">
            <h2 className="discussion-title">The Discussion</h2>
            {directoryOfComments.map(
                ({ id, author, comment, timeStamp, dateStamp }) => (
                    <div key={id} className="comment-container">
                        <p className="comment-text">{comment}</p>
                        <p className="author-text">
                            Written by:{' '}
                            <span className="authors-name">
                                {author}
                            </span>
                        </p>
                        <p className="time-stamp">
                            <span className="date">{dateStamp}</span>{' '}
                            -{' '}
                            <span className="time">{timeStamp}</span>
                        </p>
                    </div>
                )
            )}
        </div>
    );
};

// THIS COMPONENT IS EXPORTED TO TOPICS COMPONENT
export default Discussion;
// THIS COMPONENT IS EXPORTED TO TOPICS COMPONENT
