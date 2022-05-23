import PropTypes from 'prop-types';

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