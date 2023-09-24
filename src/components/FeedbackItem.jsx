import React, {useContext} from 'react';
import FeedbackContext from "../context/FeedbackContext";
import Card from './shared/Card';
import PropTypes from 'prop-types';
import {FaTimes, FaEdit} from 'react-icons/fa'

function FeedbackItem({item}) {
    const {deleteFeedback} = useContext(FeedbackContext);
    return (
        <Card className="card">
            <div className="num-display">{item.rating}</div>
            <button
                onClick={() => deleteFeedback(item.id)}
                className="close"><FaTimes color='purple'/>
            </button>
            <button className="edit">
                <FaEdit color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem;