import dynamic from 'next/dynamic'
import React from 'react'

const NoSSSR = (props: any) => (
  <React.Fragment>{props.children}</React.Fragment>
)

export default dynamic(() => Promise.resolve(NoSSSR), {
  ssr: false
})
