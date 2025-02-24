// Aggiungi elemento
const updateListElement = (event) => {
    event.preventDefault();
    setListElement((prev) => {
        return [
            ...prev,
            {
                id: Date.now(),
                name: name
            }]
    })
    setName('')
}

// Svuota lista
const clearList = () => {
    setListElement([]),
        setName('')
};

// Elimina elemento
function deleteItem(id) {
    props.setListElement((prev) => {
        return prev.filter(item => item.id !== id);
    });
}