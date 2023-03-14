import { Fragment } from 'react';
import './topics.styles.scss';

import Discussion from '../discussion/discussion.component';

const Topics = () => {
    return (
        <Fragment>
            <div className="topics-container">
                <div className="image-container">
                    <h2 className="image-title">
                        Celestial Body Name
                    </h2>
                    <div className="image" />
                </div>
                <Discussion />
                </div>
        </Fragment>
    );
};

export default Topics;
