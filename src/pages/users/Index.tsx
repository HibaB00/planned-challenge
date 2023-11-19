import UserCard from '../../components/UserCard'
import { useEffect, useState } from 'react';
import { User } from '../../types/User';
import { index } from '../../services/users';
import { Link } from 'react-router-dom';
import { List, Stack } from '@mui/material';

function Index() {
  const [users, setUsers] = useState<Array<User>>([])

  useEffect(() => {
    index().then(res => setUsers(res.data))
  }, [])

  return (
    <Stack flexDirection="column" alignItems="center">
      <List>
        {users.map(user =>(
          <Link to={`/users/${user.id}`}>
            <UserCard user={user}/>
          </Link>
        ))}
      </List>
    </Stack>
  )
}

export default Index;


