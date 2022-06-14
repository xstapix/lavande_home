import { useParams } from 'react-router-dom'

import {useGetRoomsQuery} from '../../redux/dataApi'
import Rules from '../../components/Rules'
import MainSlider from './Slider'

import './style.css'
import './media-style.css'

function Room() {
  const {id} = useParams()
  const {data = [], isLoading} = useGetRoomsQuery(id)

  if(isLoading) return <p>Loading...</p>

  return (
    <>
      <div className='room' key={data.id}>
        <div className='room__name'>{data.name}</div>    
        <MainSlider />
        <div className='room__info'>
          <p>{data.squareMeters}м²</p><div></div>
          <p>{data.miniDescription}</p><div></div>
          <p>{data.prise}</p>
        </div>
        <div className='room__description'>{data.description}</div>
        <div className='booking'>
          <div className='booking__name'>Забронируйте номер сейчас</div>
          <div className="hotelBdraivForm" data-online="1" data-frame_width="100" data-frame_height="100" data-online_full="1" data-frame_src="https://otelix.pro/bookOnline/6z8/t-343" data-class_frame_src="https://otelix.pro/bookOnline/6z8/t-343/c-otelixClass" >&nbsp;</div>    
          <Rules/>
        </div>
      </div>
    </>
  )
}

export {Room}