import * as React from "react"
import {useEffect} from "react"

interface Props {
  children: React.ReactNode
}

export default function Wrapper({children}: Props) {
  useEffect(() => {
    require("@connectedhomes/nucleus/dist/nucleus.min.js")
  })

  return <>{children}</>
}
