import Button from './Button'

function Modal() {

    return (
        <>
            {/* <!-- Main modal --> */}
            <div id="static-modal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow ">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-border">
                            <h3 className="text-xl text-text font-semibold">
                                Static modal
                            </h3>
                            <button type="button" className="text-text bg-transparent hover:bg-bg1 hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="static-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-4 md:p-5 space-y-4">
                            <p className="text-base leading-relaxed ">
                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                            </p>
                            <p className="text-base leading-relaxed ">
                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                            </p>
                        </div>
                        {/* <!-- Modal footer --> */}
                        <div className="flex items-center gap-2 p-4 md:p-5 border-t border-border rounded-b dark:border-border">
                            <Button variant="primary" size="md"> Submit </Button>
                            <Button variant="danger" size="md"> Cancel </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal

{/* <!-- Modal toggle --> */ }
{/* <button data-modal-target="static-modal" data-modal-toggle="static-modal" className="block text-white bg-bg1 hover:bg-bg2  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-bg1 dark:hover:bg-bg2" type="button">
                Toggle modal
            </button> */}