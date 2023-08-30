import type { ReactElement } from "react"
import { useState } from "react"
import { createMemoryRouter, RouterProvider } from "react-router-dom"
import Asset from "./pages/Asset"
import Setting from "./pages/Setting"
import { BottomNavigation, BottomNavigationAction, Box, createTheme, CssBaseline, Fab, ThemeProvider } from "@mui/material"
import { Add, BarChart, CreditCard, Receipt, Settings } from "@mui/icons-material"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import { SnackbarProvider } from "notistack"

const router = createMemoryRouter([
  {
    path: "/",
    element: <SignUp />
  },
  {
    path: "/home",
    element: <SignUp />
  },
  {
    path: "/statistics",
    element: <SignIn />
  },
  {
    path: "/asset",
    element: <Asset />
  },
  {
    path: "/setting",
    element: <Setting />
  }
])

export default function App(): ReactElement {
  const [activeTab, setActiveTab] = useState("home")

  const theme = createTheme({
    palette: {
      mode: "light"
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <CssBaseline />

        <Box className="hide-scroll overflow fixed bottom-[calc(56px+env(safe-area-inset-bottom))] left-0 right-0 top-0 overflow-y-auto break-all">
          <RouterProvider router={router} />
        </Box>

        <Box className="fixed bottom-0 left-0 right-0 pb-[env(safe-area-inset-bottom)]">
          <BottomNavigation
            showLabels
            value={activeTab}
            onChange={(event, path: string) => {
              setActiveTab(path)
              if (path === "add") {
                return
              }

              void router.navigate(`/${path}`)
            }}
          >
            <BottomNavigationAction label="账单" icon={<Receipt />} value="home" />
            <BottomNavigationAction label="统计" icon={<BarChart />} value="statistics" />
            <BottomNavigationAction
              disableRipple
              label=""
              showLabel={false}
              icon={
                <Fab color="primary" className="!-mt-8">
                  <Add />
                </Fab>
              }
              value="add"
            />
            <BottomNavigationAction label="资产" icon={<CreditCard />} value="asset" />
            <BottomNavigationAction label="设置" icon={<Settings />} value="setting" />
          </BottomNavigation>
        </Box>
      </SnackbarProvider>
    </ThemeProvider>
  )
}
