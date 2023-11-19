import { Memory } from '../types/Memory'
import { Edit, Share } from '@mui/icons-material'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'
import AlertPopUp from './AlertPopUp'
import { useAuth } from '../contexts/AuthContext'

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
      <CardActions disableSpacing>
        <IconButton aria-label='edit'>
          <Edit />
        </IconButton>
        <IconButton aria-label='share'>
          <Share />
        </IconButton>
        {currentUser?.id === memory.user_id ? (
          <AlertPopUp memory={memory} />
        ) : null}
      </CardActions>
    </Card>
  )
}

export default MemoryCard
