import './ShoppingList.css'

import ShoppingItem from './ShoppingItem'

export default function ShoppingList({ items, onToggleItem }) {
    return (
        <section>
        {items.map((shoppingItem,index) => (<ShoppingItem 
        isDone={shoppingItem.isDone} 
        title={shoppingItem.title}
        onToggleItem={() => toggleCheckbox(index)} 
        />
        ))}
        </section>
        )
}
