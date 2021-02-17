import PropTypes from 'prop-types'

export default function Headline({ name }) {
    return <h1>{name}'s Shopping List</h1>
}

Headline.propTypes = {
    name: PropTypes.string.isRequired,
}