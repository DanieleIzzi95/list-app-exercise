import { useState } from "react"
import ElementsOfList from "./components/ElementsOfList";
import Form from "./components/Form";
import Header from "./components/Header/components/Header";

export default function MainContentApp() {
    const [ListElement, setListElement] = useState([]);
    const [name, setName] = useState('');

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

    return (
        <>
            <div className="container-fluid c-frame">
                <div className="row">
                    <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                        <h1 className="small-body c-text-lightWhite">iDo-App</h1>
                    </div>
                </div>
                <div className="row p-4 justify-content-beween align-items-center">
                    <Header clearList={clearList} />
                </div>
                <Form updateListElement={updateListElement} setName={setName} name={name}/>

                <ElementsOfList ListElement={ListElement} setListElement={setListElement}  />

            </div>
        </>
    )
}