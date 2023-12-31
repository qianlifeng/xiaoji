import { useEffect } from "react"

interface Properties {
	title: string
}

export default function Head({ title }: Properties) {
	useEffect(() => {
		document.title = title
	}, [title])
}
