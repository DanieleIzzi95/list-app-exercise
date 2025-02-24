export default function ElementsOfList(props) {

    // Elimina elemento
    function deleteItem(id) {
        props.setListElement((prev) => {
            return prev.filter(item => item.id !== id);
        });
    }

    function Checked(id) {
        props.setListElement((prev) => {
            return prev.map((item) =>
                item.id === id ? { ...item, done: !item.done } : item
            )
        })
    }

    return (
        props.ListElement.map((element) => (
            <div className="row px-4 align-items-center pb-1" key={element.id}>
                <div className="col-12 element-to-do d-flex align-items-center ps-3">
                    <button
                        onClick={() => Checked(element.id)}
                        className="border-0 bg-transparent m-0 p-0">
                        <i className={element.done
                            ? "bi bi-circle-fill c-text-violet fw-bolder fs-3" : "bi bi-circle c-text-violet fw-bolder fs-3"}></i>
                        {/* <i className="bi bi-circle c-text-violet fw-bolder fs-3"></i> */}
                    </button>
                    <div className="d-flex w-100 align-items-center justify-content-between">
                        <p className="m-0 to-do-list-elements">{element.name}</p>
                        <div className="d-flex">
                            <button className="bg-transparent border-0">
                                <i className="bi bi-pencil-fill c-text-lightBlack fw-bolder fs-6 ps-3 pt-1"></i>
                            </button>
                            <button
                                className="bg-transparent border-0"
                                onClick={() => deleteItem(element.id)}>
                                <i className="bi bi-trash3-fill c-text-lightBlack fw-bolder fs- ps-2 pe-3 pt-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ))
    );
}
