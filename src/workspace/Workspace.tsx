import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Workspace() {
  const {user} = useUser()
  if(!user){
    return <div>Please sign in to access the workshop,
      <Link to="/">
      <Button>sing in</Button>
      </Link>
    </div>
  }
  return (
    <div>
      
      </div>
  )
}

export default Workspace