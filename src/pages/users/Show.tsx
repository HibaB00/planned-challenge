import { Link } from "react-router-dom";

function Show() {
  return (
    <div>
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8 mt-32'>
        <div className='overflow-hidden rounded-lg bg-white shadow h-96'>
          <Link to='/memories/create'>New memory</Link>
        </div>
      </div>
    </div>
  )
}

export default Show;


