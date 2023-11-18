import { User } from "../types/User"
import { Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material"
import React from "react"

function UserCard({user: {name, description, image_url}}: {user: User}){
  return(
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={name} src={image_url} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <React.Fragment>
            {description}
          </React.Fragment>
        }
      />
    </ListItem>
  )
}

export default UserCard