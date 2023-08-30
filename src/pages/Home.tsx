import type { ReactElement } from "react"
import AppBar from "../components/AppBar"
import AppBody from "../components/AppBody"

export default function Home(): ReactElement {
  return (
    <>
      <AppBar title="小记" />
      <AppBody>Home</AppBody>
    </>
  )
}
