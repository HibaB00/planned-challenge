import { Memory } from '../types/Memory'
import { Edit } from '@mui/icons-material'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'
import DeleteMemory from './DeletePopUp'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

function MemoryCard({ memory }: { memory: Memory }) {
  const { currentUser } = useAuth()
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={memory.image_url}
        title='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {memory.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {memory.description}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {memory.timestamp}
        </Typography>
      </CardContent>
      {currentUser?.id === memory.user_id ? (
        <CardActions disableSpacing>
          <Link to={`/memories/${memory.id}/edit`}>
            <IconButton aria-label='edit'>
              <Edit />
            </IconButton>
          </Link>
          <DeleteMemory memory={memory} />
        </CardActions>
      ) : null}
    </Card>
  )
}

export default MemoryCard
