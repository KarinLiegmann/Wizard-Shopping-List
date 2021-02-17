import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Button({ type, text }) {
    return (
        <MainButton type={type}>{text}</MainButton>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

const MainButton = styled.button`
    background: rebeccapurple;
    border: none;
    border-radius: 4px;
    color: ivory;
    font-size: 1rem;
    padding: .5rem 1.5rem; 
`