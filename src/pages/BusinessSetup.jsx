import Button from '../reusable_components/Button'

function BusinessSetup() {
    return (
        <>
            <div className='bg-[#F8F9FA] h-screen px-6 py-8'>
                <h1 className='font-bold text-2xl'>Payment Gateway</h1>
                <div className='bg-white flex gap-3 shadow-lg rounded-lg border border-border p-5 mt-5'>
                    {/* <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Identification</h3> */}
                    <ul className=" items-center gap-3 lg:w-[70%] text-sm font-medium rounded-lg sm:flex  dark:border-gray-600">
                        <li className="w-full bg-bg1 rounded-lg border border-border">
                            <div className="flex items-center ps-3">
                                <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-white">Indian Pay </label>
                            </div>
                        </li>
                        <li className="w-full bg-bg1 rounded-lg border border-border mt-5 sm:mt-0">
                            <div className="flex items-center ps-3">
                                <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 bg-gray-100 border-gray-300 " />
                                <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-white">Others</label>
                            </div>
                        </li>
                    </ul>
                    <Button variant="primary" size="md">Submit</Button>
                </div>
            </div>
        </>
    )
}

export default BusinessSetup