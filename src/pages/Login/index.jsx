import {useNavigate} from 'react-router-dom'
import { useAuth } from '../../hook/useAuth'

import './style.css'

const Login = () => {
  const navigate = useNavigate()
  const {singin} = useAuth()

  const handleSub = (event) => {
    event.preventDefault()
    const form = event.target 
    const username = form.username.value
    const userpassword = form.userpassword.value

    if(username === "admin" && userpassword === 'admin') {
      singin(username, () => navigate('/admin', {replace: true}) )
    }
  }

  return (
    <>
    <form onSubmit={handleSub} className='formAdmin'>
      <input 
        type="text" 
        name='username' 
        autocomplete="on" 
        placeholder='login'/>
      <input 
        className='password' 
        type="password" 
        name='userpassword' 
        autocomplete="off" 
        placeholder='password'/>
      <button type='submit'>Войти</button>
    </form>
    </>
  )
}

export {Login}