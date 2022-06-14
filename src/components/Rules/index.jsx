import {useGetRulesQuery} from '../../redux/dataApi'

import './style.css'

const Rules = () => {
  const {data = [], isLoading} = useGetRulesQuery()

  if(isLoading) return <p>loading...</p>

  return (
    <div className='booking__rules'>
      <div className='booking__rules__name'>Условия бронирования</div>
      <ol className='booking__rules__rules'>
        {data.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ol>
    </div>
  )
}

export default Rules