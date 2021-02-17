import './ShoppingList.css'

import PropTypes from 'prop-types'


export default function ShoppingItem({ isDone, title, onToggleItem }) {
    return (
        <li>            
                <input type="checkbox" checked={isDone} onChange={onToggleItem} />
                {title}            
        </li>
    )
}

ShoppingItem.propTypes = {
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool,
    onToggleItem: PropTypes.func,
}

