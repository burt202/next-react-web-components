import * as React from "react"

import Pill from "../shared-components/pill"
import NucleusWrapper from "../shared-components/wrapper"

export default function HomePage() {
  return (
    <NucleusWrapper>
      <div>
        <Pill colour="slate" text="Special offer" />
      </div>
    </NucleusWrapper>
  )
}
