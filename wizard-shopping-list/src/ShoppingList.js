import ListItem from './ListItem'

export default function ShoppingList() {
    const shoppingListItems = [
        {
            item: "broomstick",
            isDone: false
        },
        {
            item: "wand",
            isDone: true
        },
        {
            item: "invisibility cloak",
            isDone: false
        },
        {
            item: "butterbeer",
            isDone: true
        }
    ]


    return shoppingListItems.map(shoppingListItem => <ListItem isDone={shoppingListItem.isDone} item={shoppingListItem.item} />)
}
