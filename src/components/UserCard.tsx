import { Share } from '@mui/icons-material'
import { User } from '../types/User'
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import CopyToClipboard from './CopyToClipboard'

function UserCard({
  user: { name, description, image_url, id },
}: {
  user: User
}) {
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
      <CopyToClipboard
        text={`${window.location.protocol}//${window.location.host}/users/${id}`}
      >
        <Share />
      </CopyToClipboard>
    </Stack>
  )
}

export default UserCard
