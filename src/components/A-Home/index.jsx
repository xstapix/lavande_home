import {useGetTextsQuery} from '../../redux/dataApi'

const Home = ({handleChange}) => {
  const {data = [], isLoading} = useGetTextsQuery()

  if(isLoading) return <p>loading...</p>

  const handleClick = (event) =>{
    handleChange(event)
  }

  return (
    <>
      {data.map(item => (
        <div className='home-info' key={item.id}>
          <div className='title'>Описание дома</div>
          <div className='block-description'>
            <form onSubmit={handleClick} className='block-name descriptionHomeName'>
              <div className='block-name__title'>Название блока:</div>
              <input 
                type='text' 
                name='block'
                className='block-name__input'
                defaultValue={item.descriptionHomeName}
              />
              <button className='button-save'></button>
            </form>
            <form onSubmit={handleClick} className='block-name descriptionHomeText'>
              <div className='block-name__title'>Описание блока:</div>
              <textarea 
                type='text' 
                name='block'
                className='block-name__input'
                defaultValue={item.descriptionHomeText}/>
                <button className='button-save'></button>
            </form>
          </div>
          <div className='title-low'>Удобства</div>
          <div className='block-description'>
            <form onSubmit={handleClick} className='block-name oneBlockName'>
              <div className='block-name__title'>1 блок:</div>
              <input 
                type='text' 
                name='block'
                className='block-name__input'
                defaultValue={item.oneBlockName}/>
                <button className='button-save'></button>
            </form>
            <form onSubmit={handleClick} className='block-name oneBlockText'>
              <div className='block-name__title'>Описание 1 блока:</div>
              <textarea  
                type='text' 
                name='block'
                className='block-name__input'
                defaultValue={item.oneBlockText}/>
                <button className='button-save'></button>
            </form>
            <form onSubmit={handleClick} className='block-name twoBlockName'>
              <div className='block-name__title'>2 блок:</div>
              <input 
                type='text' 
                name='block'
                className='block-name__input'
                defaultValue={item.twoBlockName}/>
                <button className='button-save'></button>
            </form>
            <form onSubmit={handleClick} className='block-name twoBlockText'>
              <div className='block-name__title'>Описание 2 блока:</div>
              <textarea 
                type='text' 
                name='block'
                className='block-name__input'
                defaultValue={item.twoBlockText}/>
                <button className='button-save'></button>
            </form>
          </div>  
        </div>
      ))}
    </>
  )
}

export default Home