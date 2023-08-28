import { Box } from "@mui/material"
import type { PropsWithChildren } from "react"

export default function AppBody({ children }: PropsWithChildren) {
  return <Box className="p-4">{children}</Box>
}
