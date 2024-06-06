import SearchFrom from './SearchFrom'
import Summary from './Summary'

const SearchEngine = () => {
  return (
    <div className='relative m-auto  mt-7 w-full max-w-xl h-[72%] grid grid-cols-5 grid-rows-7 gap-2 md:max-w-3xl'>
     <SearchFrom/>
     <Summary/>
    </div>
  )
}

export default SearchEngine