import { SubmitHandler } from 'react-hook-form'
import { update } from '../../services/memories'
import { NewMemory } from '../../types/Memory'
import { useAuth } from '../../contexts/AuthContext'
import { Container } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import MemoryForm from '../../components/MemoryForm'
import { useEffect, useState } from 'react'
import { show } from '../../services/memories'

function Edit() {
  const navigate = useNavigate()
  const [memory, setMemory] = useState<NewMemory>()
  const { id } = useParams()

  const { currentUser } = useAuth()

  useEffect(() => {
    show(+id!).then((res) => setMemory(res.data))
  }, [id])

  const edit: SubmitHandler<NewMemory> = (data) =>
    update({ ...data, id: +id! }).then(() =>
      navigate(`/users/${currentUser!.id}`)
    )

  return (
    memory && (
      <Container maxWidth='sm'>
        <MemoryForm onSubmit={edit} defaultMemory={memory} />
      </Container>
    )
  )
}

export default Edit
