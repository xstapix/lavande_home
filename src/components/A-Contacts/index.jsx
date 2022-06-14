import {useGetContactsQuery} from '../../redux/dataApi'

const Contacts = ({handleChange}) => {
  const {data = [], isLoading} = useGetContactsQuery()

  if(isLoading) return <p>loading...</p>

  const handleClick = (event) =>{
    handleChange(event)
  }

  return (
    <>
      {data.map(item => (
        <div className='contacts-info'>
          <div className='title'>Контакты</div>
          <div className='block-description'>
            <form onSubmit={handleClick} className='block-name phone'>
              <div className='block-name__title'>Телефон:</div>
              <input 
                type='text' 
                name='block'
                className='block-name__input'
                defaultValue={item.phone}/>
                <button className='button-save'></button>
            </form>
            <form onSubmit={handleClick} className='block-name email'>
              <div className='block-name__title'>Email:</div>
              <input 
                type='text' 
                name='block'
                className='block-name__input'
                defaultValue={item.email}/>
                <button className='button-save'></button>
            </form>
            <form onSubmit={handleClick} className='block-name address'>
              <div className='block-name__title'>Адрес:</div>
              <textarea 
                type='text' 
                name='block'
                className='block-name__input'
                defaultValue={item.address}/>
                <button className='button-save'></button>
            </form>
          </div>
        </div>
      ))}
    </>
  )
}

export default Contacts