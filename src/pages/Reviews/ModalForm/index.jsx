import React, {useState} from 'react'
import axios from 'axios'

import RatingStar from './RatingStar'

const Form = ({active, setActive}) => {
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')
  const [ratingStar, setRatingStar] = useState('')

  const sendReview = () => {
    let getDate = new Date();
    let collectDate
    let month = '0' + (getDate.getMonth() + 1)

    collectDate =+ getDate.getDate().toString() + '.' + month.toString() + '.' + getDate.getFullYear().toString()

    if(inputValue && textareaValue) {
      axios.post('http://localhost:3001/reviews', {
        status: '',
        time: collectDate,
        name: inputValue,
        comment: textareaValue,
        rating: ratingStar
      })
      setInputValue('')
      setTextareaValue('')
      setRatingStar('')
      setActive(false)
    }
  }  

  return (
    <div className={active ? 'form active' : 'form'} onClick={() => setActive(false)}>
      <div className='form__content' onClick={(event) => event.stopPropagation()}>
        <div className='form__content__name'>
          <div className='content__name__text'>Новый отзыв</div>
          <div className='content__name__close' onClick={() => setActive(false)}></div>
        </div>
        <input 
          className='form__content__input' 
          type="text"
          placeholder='Имя'
          value={inputValue} 
          onChange={event => setInputValue(event.target.value)}></input>
        <div className='form__content__stars'>
        <RatingStar rating={ratingStar} setRating={setRatingStar}/>
        </div>
        <div className='form__content__comment'>
          <textarea 
            className='content__comment__text' 
            placeholder='Комментарий'
            value={textareaValue} 
            onChange={event => setTextareaValue(event.target.value)}></textarea>
        </div>
        <div className='form__content__button' onClick={sendReview}>Оставить отзыв</div>
      </div>
    </div>
  )
}

export default Form