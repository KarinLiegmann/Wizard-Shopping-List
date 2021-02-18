import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Button({ text, onClickFunction}) {
    return (
        <MainButton onClick={onClickFunction}>{text}</MainButton>
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
    margin-bottom: 1rem;
    padding: .5rem 1.5rem;    
    width: 100%;
    box-shadow: 4px 4px 4px lightgray;

    &:hover {
        transform: scale(1.1);
        color: lightgray;
    } 
`