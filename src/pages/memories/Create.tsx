import { SubmitHandler } from 'react-hook-form'
import { submit } from '../../services/memories'
import { NewMemory } from '../../types/Memory'
import { useAuth } from '../../contexts/AuthContext'
import { Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import MemoryForm from '../../components/MemoryForm'

function Create() {
  const navigate = useNavigate()

  const { currentUser } = useAuth()

  const create: SubmitHandler<NewMemory> = (data) =>
    submit({ ...data, user_id: currentUser!.id }).then(() =>
      navigate(`/users/${currentUser?.id}`)
    )

  return (
    <Container maxWidth='sm'>
      <MemoryForm onSubmit={create} />
    </Container>
  )
}

export default Create
