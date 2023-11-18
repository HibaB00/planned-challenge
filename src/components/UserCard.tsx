import { Link } from "react-router-dom"
import { User } from "../types/User"

function UserCard({user: {id, name, description}}: {user: User}){
  return(
    <Link to={`/users/${id}`}>
      <div className='m-4 w-64 h-32 rounded-lg bg-white shadow'>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default UserCard