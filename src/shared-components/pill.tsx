import * as React from "react"

interface Props {
  colour: string
  text: string
}

export default function Another(props: Props) {
  return <ns-pill colour={props.colour}>{props.text}</ns-pill>
}
