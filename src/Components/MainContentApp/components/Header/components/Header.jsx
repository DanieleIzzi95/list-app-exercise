export default function Header({clearList}){
    return(
        <>
        <div className="col-12 p-0 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-baseline">
                <h2 className="big-title c-text-lightWhite">Lista spesa</h2>
                {/* <p className="caption c-text-lightWhite ms-3">0/1</p> */}
            </div>
            <div className=" d-flex justify-content-center align-items-center gap-4 pb-1">
                <button
                    className="border-0 bg-transparent m-0 p-0">
                    <i
                        className="bi bi-pencil-square c-text-lightWhite fw-bolder fs-4">
                    </i>
                </button>
                <button
                    onClick={clearList}
                    className="border-0 bg-transparent m-0 p-0">
                    <i
                        className="bi bi-trash3 c-text-lightWhite fw-bolder fs-4">
                    </i>
                </button>
            </div>
        </div>
        </>
    )
}