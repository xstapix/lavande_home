import {useGetContactsQuery} from '../../redux/dataApi'
import MapY from './Map'

import './style.css'
import './media-style.css'

function Contacts() {
  const {data = [], isLoading} = useGetContactsQuery()

  if(isLoading) return <p>loading...</p>

  return (
    <>
    {data.map(item => (
      <div className='contacts'>
        <div className='contacts__name'>Контакты</div>
        <div className='contacts__text'>Добраться до нашего курортного дома легко, но помощь никогда не помешает. </div>
        <div className='contacts__phone'>Вы можете связаться с нами по WhatsApp: {item.phone}</div>
      </div>
    ))}
    <MapY/>
    </>
  )
}

export {Contacts}