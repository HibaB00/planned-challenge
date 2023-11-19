import { Button, Container, Stack, TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth } from '../contexts/AuthContext'
import { NewMemory } from '../types/Memory'
import { useNavigate } from 'react-router-dom'

type MemoryFormProps = {
  onSubmit: SubmitHandler<NewMemory>
  defaultMemory?: NewMemory | undefined
}

export default function MemoryForm({
  onSubmit,
  defaultMemory,
}: MemoryFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewMemory>({
    defaultValues: defaultMemory,
  })

  const navigate = useNavigate()

  const { currentUser } = useAuth()

  if (!currentUser) navigate(`/users`)

  return (
    <Container maxWidth='sm'>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  )
}
