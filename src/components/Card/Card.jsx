import PropTypes from 'prop-types';


/**
 * Card component
 *
 * @param {object} props containing the data for the card, image and text
 * @returns {node} html code of the card
 */
function Card(props) {
    return  <div className="card">
                <img src={props.image} alt="" />
                <p className="card__title">{props.value}</p>
                <p className="card__subtitle">{props.name}</p>
            </div>
}

Card.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    image: PropTypes.node
}
export default Card;