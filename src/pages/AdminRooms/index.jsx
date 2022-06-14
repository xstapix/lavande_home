import axios from 'axios'
import {useGetRoomsQuery} from '../../redux/dataApi'

import './style.css'

const AdminRooms = () => {
  const {data = [], isLoading} = useGetRoomsQuery()

  if(isLoading) return <p>loading...</p>

  const handleChange = (event) => {
    event.preventDefault()
    const changeValue = event.target.block.value
    const itemID = event.target.id;
    const itemName = event.target.className.split(" ").pop();

    document.getElementById("message").classList.toggle("active")
    setTimeout(() => {
      document.getElementById("message").classList.toggle("active")
    }, 900);

    switch(itemName){
      case 'prise':
        axios.patch('http://localhost:3001/rooms/' + itemID, {
          prise: changeValue
        })
      break
      case 'descriptionRoom':
        axios.patch('http://localhost:3001/rooms/' + itemID, {
          description: changeValue
        })
      break
      case 'miniDescription':
        axios.patch('http://localhost:3001/rooms/' + itemID, {
          miniDescription: changeValue
        })
      break
      case 'squareMeters':
        axios.patch('http://localhost:3001/rooms/' + itemID, {
          squareMeters: changeValue
        })
      break
      default:
        console.log('ERROR')
      break
    }
  }

  return (
    <div>
      {data.map(item => (
        <div className='room-item' key={item.id}>
          <div className='title'>{item.name}</div>
          <div className='info__flex'>
            <div>
              <form onSubmit={handleChange} className='block-name squareMeters' id={item.id}>
                <div className='block-name__title'>Площадь:</div>
                <input 
                  type='text' 
                  name='block'
                  className='block-name__input'
                  defaultValue={item.squareMeters}
                />
                <button className='button-save'></button>
              </form>
              <form onSubmit={handleChange} className='block-name miniDescription' id={item.id}>
                <div className='block-name__title'>Краткое описание:</div>
                <input 
                  type='text' 
                  name='block'
                  className='block-name__input'
                  defaultValue={item.miniDescription}
                />
                <button className='button-save'></button>
              </form>
              <form onSubmit={handleChange} className='block-name prise' id={item.id}>
                <div className='block-name__title'>Цена:</div>
                <input 
                  type='text' 
                  name='block'
                  className='block-name__input'
                  defaultValue={item.prise}
                />
                <button className='button-save'></button>
              </form>
            </div>
            <form onSubmit={handleChange} className='block-name descriptionRoom' id={item.id}>
              <div className='block-name__title'>Описание:</div>
              <textarea 
                type='text' 
                name='block'
                className='block-name__input'
                defaultValue={item.description}
                />
                <button className='button-save'></button>
            </form>
          </div>
        </div>  
      ))}
      
      <div className='message' id='message'>Сохранено</div>
    </div>
  )
}

export {AdminRooms}