import { createUSer } from '@/actions'
import React from 'react'

const UserForm = () => {

  return (
    <form action={createUSer}>
        <input type="text" name="name" placeholder='John Doe'/>
        <button type="submit">Create</button>
    </form>
  )
}

export default UserForm