import { useParams } from "react-router-dom";
import { show } from "../../services/memories";
import { useEffect, useState } from "react";
import { Memory } from "../../types/Memory";

function Show() {
  const { id } = useParams();
  const [memory, setMemory] = useState<Memory>();

  useEffect(() => {
    show(+id!).then(res => setMemory(res.data))
  }, [id])
  
  return (
    <div>
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8 mt-32'>
        <div className='overflow-hidden rounded-lg bg-white shadow h-96'>
          <h1>{`${memory?.name}`}</h1>
          <p>{memory?.description}</p>
          <p>{memory?.timestamp}</p>
        </div>
      </div>
    </div>
  )
}

export default Show;


