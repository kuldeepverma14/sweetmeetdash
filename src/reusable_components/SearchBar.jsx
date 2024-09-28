import { CiSearch } from 'react-icons/ci'

function Search() {
    return (
        <>
            <div className=' text-gray-800 bg-bginput border border-border py-1 px-2 rounded-md flex items-center'>
                <div className='flex-shrink-0'>
                    <CiSearch size={25} className='text-bg1' />
                </div>
                <input
                    placeholder='Search'
                    className='ml-2 text-gray-800 bg-bginput flex-auto w-full  focus:outline-none placeholder-gray-400'
                    type="text"
                />
            </div>
        </>
    )
}

export default Search 
