/* eslint-disable react/prop-types */
import Button from './Button'

function ListModal({ onClick, title, body }) {

    return (
        <>
            <div className="fixed inset-0  top-0 left-0 z-40 bg-gray-900 bg-opacity-50  flex justify-center items-center">
                {/* <!-- Main modal --> */}
                <div className="relative p-4 w-full max-w-xl max-h-full z-50">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow ">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between bg-bg1 p-2 md:p-3 border-b rounded-t dark:border-border">
                            <h3 className="text-xl text-white font-semibold">
                                {title}
                            </h3>
                            <button onClick={onClick} type="button" className="text-white bg-transparent rounded-lg text-lg hover:text-2xl w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="static-modal">
                                X
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-2 md:p-3 space-y-4">
                            <ul className="max-w-md flex flex-wrap overflow-wrap space-y-1 list-inside">
                                {body.map((item, index) => (
                                    <li key={index} className="flex items-center text-nowrap mr-5">
                                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        {item}
                                    </li>))}
                            </ul>

                        </div>
                        {/* <!-- Modal footer --> */}
                        {/* <div className="flex items-center gap-2 p-4 md:p-5 border-t border-border rounded-b dark:border-border">
                            <Button variant="primary" size="md"> Submit </Button>
                            <Button variant="danger" size="md"> Cancel </Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListModal

{/* <!-- Modal toggle --> */ }
{/* <button data-modal-target="static-modal" data-modal-toggle="static-modal" className="block text-white bg-bg1 hover:bg-bg2  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-bg1 dark:hover:bg-bg2" type="button">
                Toggle modal
            </button> */}