import './Button.css'

import PropTypes from 'prop-types'

export default function Button({ type, text }) {
    return (
        <button type={type}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}