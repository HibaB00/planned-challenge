import * as React from 'react'
import Tooltip from '@mui/material/Tooltip'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import { IconButton } from '@mui/material'

export default function CopyToClipboard({
  children,
  text,
}: {
  children: React.ReactNode
  text: string
}) {
  const [open, setOpen] = React.useState(false)

  const copyToClipboard = () => navigator.clipboard.writeText(text)

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    copyToClipboard()
    setOpen(true)
  }

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title='Text copied to clipboard'
      >
        <IconButton
          onClick={() => {
            handleTooltipOpen()
            copyToClipboard()
          }}
        >
          {children}
        </IconButton>
      </Tooltip>
    </ClickAwayListener>
  )
}
