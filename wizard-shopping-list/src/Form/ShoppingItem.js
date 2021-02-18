import PropTypes from 'prop-types'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

export default function ShoppingItem({ isDone, title, onToggleItem, onDeleteItem, id }) {
    return (
        <ListItem>            
                <Checkbox type="checkbox" checked={isDone} id={id} onChange={onToggleItem}/>
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
text-align: right;
transform: scale(1);
`

const Checkbox = styled.input`
transform: scale(1.3);
margin-right: 1rem;

&:hover {
    transform: scale(1.6)
}
`