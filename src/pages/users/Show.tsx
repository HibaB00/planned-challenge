import { Link, useParams } from "react-router-dom";
import MemoryCard from "../../components/MemoryCard";
import { show } from "../../services/users";
import { useEffect, useState } from "react";
import { User } from "../../types/User";

function Show() {
  const { id } = useParams();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    show(+id!).then(res => setUser(res.data))
  }, [id])
  
  return (
    <div>
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8 mt-32'>
        <h1>{`${user?.name}`}</h1>
        <p>{user?.description}</p>
        <div className='overflow-hidden rounded-lg bg-white shadow h-96'>
          <Link to='/memories/create'>New memory</Link>   
          {user?.memories.map((memory) => <MemoryCard memory={memory}/>)}
        </div>
      </div>
    </div>
  )
}

export default Show;


