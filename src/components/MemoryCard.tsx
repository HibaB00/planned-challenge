import { Memory } from '../types/Memory'
import { Edit, Delete, Share } from '@mui/icons-material'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'

function MemoryCard({
  memory: { name, timestamp, description, image_url },
}: {
  memory: Memory
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image_url} title='green iguana' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {timestamp}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Edit />
        </IconButton>
        <IconButton aria-label='share'>
          <Share />
        </IconButton>
        <IconButton aria-label='share'>
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default MemoryCard
