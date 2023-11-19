import { Button, Stack, Typography } from '@mui/material'
import Thinking from '../assets/thinking.png'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Stack alignItems='center' height='90vh' justifyContent='center'>
      <Typography variant='h5'>
        We couldn't find what you're looking for... Guess we don't have any
        memory of it?
      </Typography>
      <img
        src={Thinking}
        alt=''
        style={{
          width: '50%',
        }}
      />
      <Link to='/'>
        <Button>Go to Homepage</Button>
      </Link>
    </Stack>
  )
}
