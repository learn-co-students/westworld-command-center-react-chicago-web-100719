import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

const WestworldMap = (props) => {
  
  const renderAreas = () =>{
    return props.areas.map(area =>{
       return <Area area={area} hosts={props.hosts}/>
    })
  } 

  return (
    <Segment id="map" >
      {renderAreas()}
    </Segment>
  )
}

export default WestworldMap
