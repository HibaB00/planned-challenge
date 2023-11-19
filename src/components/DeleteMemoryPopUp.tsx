import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { Memory } from '../types/Memory'
import { remove } from '../services/memories'
import { useNavigate } from 'react-router-dom'

export default function DeleteMemoryPopUp({
  memory: { name, id },
}: {
  memory: Memory
}) {
  const [open, setOpen] = React.useState(false)

  const navigate = useNavigate()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const removeMemory = (id: Memory['id']) => remove(id).then(() => navigate(0))

  return (
    <React.Fragment>
      <IconButton aria-label='delete' onClick={handleClickOpen}>
        <Delete />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{name}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure you want to delete this memory?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant='contained'
            color='error'
            onClick={() => {
              handleClose()
              removeMemory(id)
            }}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
