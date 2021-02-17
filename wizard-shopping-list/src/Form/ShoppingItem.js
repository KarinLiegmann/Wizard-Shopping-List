import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function ShoppingItem({ isDone, title, onToggleItem, onDeleteItem, placeHolderText }) {
    return (
        <ListItem>            
                <input type="checkbox" checked={isDone} onChange={onToggleItem} />
                {title}

                <DeleteIcon onClick={onDeleteItem}>&times;</DeleteIcon>            
        </ListItem>
    )
}

ShoppingItem.propTypes = {
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool,
    onToggleItem: PropTypes.func,
}

const ListItem = styled.li`
list-style: none;
margin-top: 0.5rem;
`

const DeleteIcon = styled.span`
color: red;
cursor: pointer;
font-weight: bold;
margin-left: 0.5rem;
`