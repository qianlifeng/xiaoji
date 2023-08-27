import type { ReactElement } from "react"
import { createMemoryRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Statistics from "./pages/Statistics"
import Asset from "./pages/Asset"
import Setting from "./pages/Setting"
import { BottomNavigation, BottomNavigationAction, Box, createTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material"
import { BarChart, CreditCard, Settings } from "@mui/icons-material"
import { useMemo, useState } from "react"

const router = createMemoryRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/statistics",
    element: <Statistics />
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
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="hide-scroll fixed bottom-[calc(56px+env(safe-area-inset-bottom))] left-0 right-0 top-0 overflow-auto">
        <RouterProvider router={router} />
      </Box>

      <Box className="fixed bottom-0 left-0 right-0 pb-[env(safe-area-inset-bottom)]">
        <BottomNavigation
          showLabels
          value={activeTab}
          onChange={(event, path: string) => {
            setActiveTab(path)
            void router.navigate(`/${path}`)
          }}
        >
          <BottomNavigationAction label="首页" icon={<BarChart />} value="home" />
          <BottomNavigationAction label="统计" icon={<BarChart />} value="statistics" />
          <BottomNavigationAction label="资产" icon={<CreditCard />} value="asset" />
          <BottomNavigationAction label="设置" icon={<Settings />} value="setting" />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  )
}
