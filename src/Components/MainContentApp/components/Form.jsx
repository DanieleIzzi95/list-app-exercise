export default function Form({updateListElement, setName, name}){
    return(
        <form className="row px-4 mb-2 input-task" onSubmit={updateListElement}>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Oggi devo fare.." />
            <button type="submit" className="border-0 bg-transparent m-0 p-0">
                <i className="bi bi-plus c-text-lightWhite fs-1 fw-bolder" id="plusIcon"></i>
            </button>
        </form>
    )
}