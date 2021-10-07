import * as React from 'react'
import {Helmet} from 'react-helmet'
type IHeaderProps = {
  title: string
}
const Header = (props: IHeaderProps) => {
  return (
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
  )
}

export default Header
