import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from "./shared/Card"

const FeedbackItem = ({item}) => {
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close">
          <FaTimes color="purple"/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem