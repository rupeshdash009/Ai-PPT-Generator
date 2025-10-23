import React from 'react'
import { useParams } from 'react-router-dom'

const Project = () => {
    const {projectId} = useParams()
  return (
    <div>project:{projectId}</div>
  )
}

export default Project