import './App.scss';

// import { AiOutlineStar } from 'react-icons/ai';

const App = () => {
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
        <div className="body-container">
            <div className="website-title-bar">
                <h1>Star Talk Reforged</h1>
                <ul>
                    <li>Login</li>
                    <li>Signup</li>
                </ul>
            </div>
            <nav>
                <a href="!#">Planet</a>
                <a href="!#">Planet</a>
                <a href="!#">Planet</a>
                <a href="!#">Planet</a>
                <a href="!#">Planet</a>
                <a href="!#">Planet</a>
                <a href="!#">Planet</a>
                <a href="!#">Planet</a>
            </nav>
            <div className="topics-container">
                <div className="image-container">
                    <h2 className="image-title">
                        Celestial Body Name
                    </h2>
                    <div className="image" />
                </div>
                <div className="discussion-container">
                    <h2 className="discussion-title">
                        The Discussion
                    </h2>
                    {directoryOfComments.map(
                        ({
                            id,
                            author,
                            comment,
                            timeStamp,
                            dateStamp,
                        }) => (
                            <div
                                key={id}
                                className="comment-container"
                            >
                                <p className="comment-text">
                                    {comment}
                                </p>
                                <p className="author-text">
                                    Written by:{' '}
                                    <span className="authors-name">
                                        {author}
                                    </span>
                                </p>
                                <p className="time-stamp">
                                    <span className="date">
                                        {dateStamp}
                                    </span>{' '}
                                    -{' '}
                                    <span className="time">
                                        {timeStamp}
                                    </span>
                                </p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
