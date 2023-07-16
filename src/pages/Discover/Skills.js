import React from 'react'
import './Skills.css'

const Skills = (props) => {
  return (
    props.dis === "1"
     ? 
     <div title="User Has Not Specified Their Skills" className='skills disabled_button'>
     {props.skill}
   </div>
    :
      <div className='skills'>
        {props.skill}
      </div>
  )
}

export default Skills