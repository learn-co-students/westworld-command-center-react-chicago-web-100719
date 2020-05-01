import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  const clicked = props.selected ? "host selected" : "host"

  return(
    <Card
      className={clicked}
      onClick={()=>props.selectHost(props.id)}
      image={props.host.imageUrl}
      raised
    />
  )
}

export default Host
