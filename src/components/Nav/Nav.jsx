import PropTypes from 'prop-types';
import "./Nav.css" 

function Nav(props) {
    return <div className = {props.direction}>
        {props.data}
    </div>
}

Nav.propTypes = {
    direction: PropTypes.string,
    data: PropTypes.node
}
export default Nav; 