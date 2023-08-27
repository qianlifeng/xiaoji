import type { ReactElement } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { TabBar } from "antd-mobile"
import { AppOutline, BankcardOutline, HistogramOutline, SetOutline } from "antd-mobile-icons"
import Home from "./pages/Home"
import Statistics from "./pages/Statistics"
import Asset from "./pages/Asset"
import Setting from "./pages/Setting"

const router = createBrowserRouter([
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
	return (
		<>
			<RouterProvider router={router} />
			<TabBar className='width- fixed bottom-4 w-full' safeArea onChange={path => void router.navigate(`/${path}`)}>
				<TabBar.Item key='home' icon={<AppOutline />} title='首页' />
				<TabBar.Item key='statistics' icon={<HistogramOutline />} title='统计' />
				<TabBar.Item key='asset' icon={<BankcardOutline />} title='资产' />
				<TabBar.Item key='setting' icon={<SetOutline />} title='设置' />
			</TabBar>
		</>
	)
}
