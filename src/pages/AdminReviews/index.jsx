import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './style.css'
import RatingStar from './RatingStar'

const AdminReviews = () => {
  const [reviewData, setReviewData] = useState()
  const [newReviewData, setNewReviewData] = useState()

  useEffect(() => {
    axios.get('http://localhost:3001/reviews').then(({data}) => {
      setReviewData(data.filter(item => item.status === 'pass'))
      setNewReviewData(data.filter(item => item.status === ''))
    })
  }, [])

  const PassReview = (event) => {
    newReviewData.map(item => {
      if(item.id == event.target.id) {
        item.status = 'pass'
      
        axios.patch('http://localhost:3001/reviews/' + event.target.id, {
          status: item.status
        })
      }
    })

    const newList = newReviewData.filter(item => item.status != 'pass')
    setNewReviewData(newList)
  }

  const RejectNewReview = (event) => {
    if(window.confirm('Отклонить отзыв?')) {
      newReviewData.map(item => {
        if(item.id == event.target.id) {
          item.status = 'reject'
        
          axios.delete('http://localhost:3001/reviews/' + event.target.id)
        }
      })
  
      const newList = newReviewData.filter(item => item.status === '')
      setNewReviewData(newList)
    }
  }

  const RejectReview = (event) => {
    if(window.confirm('Удалить отзыв?')) {
      reviewData.map(item => {
        if(item.id == event.target.id) {
          item.status = ''
  
          axios.delete('http://localhost:3001/reviews/' + event.target.id)
        }
      })
      const newList = reviewData.filter(item => item.status == 'pass')
      setReviewData(newList)
    }
  }

  return (
    <>
      <div className='newReview'>
        <div className='newReview__name'>Новые отзывы</div>
        {newReviewData ? newReviewData.map((item) => (
          <div className='review' key={item.id}>
            <div className='review__item'>
              <div className='review__item__button'>
                <div className='button__pass' onClick={PassReview} id={item.id}></div>
                <div className='button__reject' onClick={RejectNewReview} id={item.id}></div>
              </div>
              <div className='review__item__name'>{item.name}</div>
              <div className='review__item__time'>{item.time}</div>
              <RatingStar rating={item.rating}/>
              <div className='review__item__text'>{item.comment}</div>
            </div>
          </div>
        )): ('loading...')}
      </div>
      <div className='allReviews'>
        <div className='allReviews__name'>Все отзывы</div>
        {reviewData ? reviewData.map((item) => (
          <div className='review' key={item.id}>
            <div className='review__item'>
              <div className='review__item__button'>
                <div className='button__reject' onClick={RejectReview} id={item.id}></div>
              </div>
              <div className='review__item__name'>{item.name}</div>
              <div className='review__item__time'>{item.time}</div>
              <RatingStar rating={item.rating}/>
              <div className='review__item__text'>{item.comment}</div>
            </div>
          </div>
        )): ('loading...')}
      </div>
    </>
    
  )
}

export {AdminReviews}