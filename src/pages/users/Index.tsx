import { CubeIcon } from '@heroicons/react/20/solid'
import UserCard from '../../components/UserCard'
import { useEffect, useState } from 'react';
import { User } from '../../types/User';
import { index } from '../../services/users';

function Index() {
  const [users, setUsers] = useState<Array<User>>([])

  useEffect(() => {
    index().then(res => setUsers(res.data))
  }, [])

  return (
    <div>
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8 mt-32'>
        <div className='overflow-hidden rounded-lg bg-white shadow h-96'>
          <div className='px-4 py-5 sm:p-6'>
            <div className='flex items-center'>
              <CubeIcon className='h-16 w-16 inline-block' />
              <h1 className='text-4xl font-semibold text-gray-900 mb-4 ml-4 mt-4'>
                Memory lane
              </h1>
            </div>
            <div>
              {users.map(user => <UserCard user={user}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;


