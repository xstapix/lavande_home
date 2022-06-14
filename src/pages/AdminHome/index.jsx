import axios from 'axios'

import './style.css'
import Home from '../../components/A-Home'
import Contacts from '../../components/A-Contacts'
import Rules from '../../components/A-Rules'

const AdminHome = () => {

  const handleChange = (event) => {
    event.preventDefault()
    const changeValue = event.target.block.value
    const item = event.target.className.split(" ").pop();

    document.getElementById("message").classList.toggle("active")
    setTimeout(() => {
      document.getElementById("message").classList.toggle("active")
    }, 900);

    switch(item){
      case 'descriptionHomeName':
        axios.patch('http://localhost:3001/texts/1', {
          descriptionHomeName: changeValue
        })
      break
      case 'descriptionHomeText':
        axios.patch('http://localhost:3001/texts/1', {
          descriptionHomeText: changeValue
        })
      break
      case 'oneBlockName':
        axios.patch('http://localhost:3001/texts/1', {
          oneBlockName: changeValue
        })
      break
      case 'oneBlockText':
        axios.patch('http://localhost:3001/texts/1', {
          oneBlockText: changeValue
        })
      break
      case 'twoBlockName':
        axios.patch('http://localhost:3001/texts/1', {
          twoBlockName: changeValue
        })
      break
      case 'twoBlockText':
        axios.patch('http://localhost:3001/texts/1', {
          twoBlockText: changeValue
        })
      break
      case 'phone':
        axios.patch('http://localhost:3001/contacts/1', {
          phone: changeValue
        })
      break
      case 'address':
        axios.patch('http://localhost:3001/contacts/1', {
          address: changeValue
        })
      break
      case 'email':
        axios.patch('http://localhost:3001/contacts/1', {
          email: changeValue
        })
      break
      default:
        console.log('ERROR')
      break
    }
  }

  return (
    <>
      <div className='main-info'>
        <Home handleChange={handleChange}/>
        <Contacts handleChange={handleChange}/>
      </div>
      <div className='line'></div>
      <Rules/>
    <div className='message' id='message'>Сохранено</div>
    </>
  )
}

export {AdminHome}