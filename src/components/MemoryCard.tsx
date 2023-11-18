import { Link } from "react-router-dom"
import { Memory } from "../types/Memory"

function MemoryCard({memory: {id, name, timestamp, description}}: {memory: Memory}){
  return(
    <Link to={`/memories/${id}`}>
      <div className='m-4 w-64 h-32 rounded-lg bg-white shadow'>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{timestamp}</p>
      </div>
    </Link>
  )
}

export default MemoryCard