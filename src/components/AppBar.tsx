import { AppBar as MAppBar, Toolbar, Typography } from "@mui/material"
import type { ReactElement } from "react"

interface Properties {
  front?: ReactElement | string
  title?: ReactElement | string
  tail?: ReactElement | string
}

export default function AppBar({ front, title, tail }: Properties) {
  return (
    <MAppBar position="sticky" color="inherit" className="!shadow-none">
      <Toolbar className="justify-between">
        {front ?? <div />}
        {title ? (
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        ) : (
          <div />
        )}
        {tail ?? <div />}
      </Toolbar>
    </MAppBar>
  )
}

AppBar.defaultProps = {
  front: undefined,
  tail: undefined,
  title: undefined
}
