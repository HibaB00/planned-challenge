import { Share } from '@mui/icons-material'
import { User } from '../types/User'
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function UserCard({
  user: { name, description, image_url, id },
}: {
  user: User
}) {
  const copyToClipboard = () =>
    navigator.clipboard.writeText(`http://localhost:5173/users/${id}`)
  return (
    <Stack direction='row' spacing={2}>
      <Link to={`/users/${id}`}>
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt={name} src={image_url} />
          </ListItemAvatar>
          <ListItemText
            primary={name}
            secondary={<React.Fragment>{description}</React.Fragment>}
          />
        </ListItem>
      </Link>
      <IconButton aria-label='share' onClick={copyToClipboard}>
        <Share />
      </IconButton>
    </Stack>
  )
}

export default UserCard
