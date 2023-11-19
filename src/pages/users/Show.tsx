import { Link, useNavigate, useParams } from 'react-router-dom'
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
  const [order, setOrder] = useState<'column' | 'column-reverse'>('column')

  const navigate = useNavigate()

  const orderBy = () =>
    setOrder((currentValue) =>
      currentValue === 'column' ? 'column-reverse' : 'column'
    )

  useEffect(() => {
    show(+id!)
      .then((res) => setUser(res.data))
      .catch(() => navigate(`/404`))
  }, [id])

  return (
    user && (
      <Stack gap={4} paddingY={4} flexDirection='column'>
        <UserCard user={user} />
        <Stack direction='row' justifyContent='space-between'>
          <Button variant='outlined' color='info' onClick={orderBy}>
            {order === 'column' ? 'Older to New' : 'New to Older'}
          </Button>
          {currentUser?.id == id ? (
            <Link to='/memories/create'>
              <Button variant='outlined' color='info'>
                New Memory
              </Button>
            </Link>
          ) : null}
        </Stack>
        <Stack gap={3} padding={3} alignItems='center'>
          <img src={End} alt='' width={120} />
          <Stack gap={2} flexDirection={order} alignItems='center'>
            {user?.memories.map((memory) => (
              <>
                <Separator />
                <MemoryCard memory={memory} />
              </>
            ))}
            <Separator />
          </Stack>
          <img src={Start} alt='' width={120} />
        </Stack>
      </Stack>
    )
  )
}

export default Show
