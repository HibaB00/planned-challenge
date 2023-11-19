import UserCard from '../../components/UserCard'
import { useEffect, useState } from 'react'
import { User } from '../../types/User'
import { index } from '../../services/users'
import { List, Stack } from '@mui/material'

function Index() {
  const [users, setUsers] = useState<Array<User>>([])

  useEffect(() => {
    index().then((res) => setUsers(res.data))
  }, [])

  return (
    <Stack flexDirection='column' alignItems='center'>
      <List>
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </List>
    </Stack>
  )
}

export default Index
