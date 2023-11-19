import { useForm, SubmitHandler } from 'react-hook-form'
import { submit } from '../../services/memories'
import { NewMemory } from '../../types/Memory'
import { useAuth } from '../../contexts/AuthContext'
import { Button, Container, Stack, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewMemory>()

  const navigate = useNavigate()

  const { currentUser } = useAuth()

  if (!currentUser) return <p>YOU DON'T HAVE ACCESS</p>

  const create: SubmitHandler<NewMemory> = (data) =>
    submit({ ...data, user_id: currentUser.id }).then(() =>
      navigate(`/users/${currentUser.id}`)
    )

  return (
    <Container maxWidth='sm'>
      <form onSubmit={handleSubmit(create)}>
        <Stack paddingY={4} gap={2} flexDirection='column' alignItems='center'>
          <TextField
            error={!!errors.name}
            helperText={errors.name ? 'This field is required' : ''}
            fullWidth
            label='Name'
            variant='outlined'
            {...register('name', { required: true })}
          />
          <TextField
            error={!!errors.description}
            helperText={errors.description ? 'This field is required' : ''}
            fullWidth
            multiline
            rows={7}
            label='Description'
            variant='outlined'
            {...register('description', { required: true })}
          />
          <TextField
            error={!!errors.image_url}
            helperText={errors.image_url ? 'This field is required' : ''}
            fullWidth
            label='Image URL'
            variant='outlined'
            {...register('image_url', { required: true })}
          />
          <TextField
            error={!!errors.timestamp}
            helperText={errors.timestamp ? 'This field is required' : ''}
            fullWidth
            InputLabelProps={{ shrink: true }}
            type='date'
            label='Timestamp'
            variant='outlined'
            {...register('timestamp', { required: true })}
          />
          <Button variant='outlined' type='submit'>
            Create
          </Button>
        </Stack>
      </form>
    </Container>
  )
}

export default Create
