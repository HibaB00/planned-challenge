import UserCard from '../../components/UserCard'
import { useEffect, useState } from 'react';
import { User } from '../../types/User';
import { index } from '../../services/users';
import { Link } from 'react-router-dom';
import { Button, List, Stack } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';

function Index() {
  const [users, setUsers] = useState<Array<User>>([])

  const { login, currentUser, logout } = useAuth()

  useEffect(() => {
    index().then(res => setUsers(res.data))
  }, [])

  return (
    <Stack flexDirection="column" alignItems="center">
      <List>
        { currentUser ? <Button onClick={logout}>LOGOUT</Button> : <Button onClick={login}>LOGIN</Button> }
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


