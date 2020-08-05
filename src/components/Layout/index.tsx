import React from 'react'

import { Grid } from './styles'
import ServerList from '../ServerList'
import ServerName from '../ServerName'

const Layout: React.FC = () => {
  return (
    <div>
      <Grid>
        <ServerList />
        <ServerName />
      </Grid>
    </div>
  )
}

export default Layout