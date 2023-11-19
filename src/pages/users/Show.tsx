import { Link, useParams } from 'react-router-dom'
import MemoryCard from '../../components/MemoryCard'
import { show } from '../../services/users'
import { useEffect, useState } from 'react'
import { User } from '../../types/User'
import { Button, Stack } from '@mui/material'
import Start from '../../assets/start.png'
import End from '../../assets/end.png'
import Separator from '../../components/Separator'
import UserCard from '../../components/UserCard'
import { useAuth } from '../../contexts/AuthContext'

function Show() {
  const { id } = useParams()
  const [user, setUser] = useState<User>()
  const { currentUser } = useAuth()

  useEffect(() => {
    show(+id!).then((res) => setUser(res.data))
  }, [id])

  return (
    user && (
      <Stack gap={4} paddingY={4} flexDirection='column' alignItems='center'>
        <Stack direction='row'>
          <UserCard user={user} />
        </Stack>
        <Stack gap={3} padding={3}>
          <Stack gap={2} flexDirection='column' alignItems='center'>
            {currentUser?.id == id ? (
              <Link to='/memories/create'>
                <Button variant='outlined' color='info'>
                  New Memory
                </Button>
              </Link>
            ) : null}
            <img src={End} alt='' width={120} />
            {user?.memories.map((memory) => (
              <>
                <Separator />
                <MemoryCard memory={memory} />
              </>
            ))}
            <Separator />
            <img src={Start} alt='' width={120} />
          </Stack>
        </Stack>
      </Stack>
    )
  )
}

export default Show
