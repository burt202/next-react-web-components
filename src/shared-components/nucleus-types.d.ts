import {nsPill} from "@connectedhomes/nucleus/dist/components/src/ns-pill/index.js"

export interface INsPill {
  colour: string
  icon?: string
  children: string
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ns-pill": Partial<React.DOMAttributes<nsPill>> & INsPill
    }
  }
}
