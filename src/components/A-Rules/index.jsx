import { useState } from 'react'
import {useGetRulesQuery, useAddRulesMutation, useDeleteRulesMutation} from '../../redux/dataApi'

const Rules = () => {
  const [newRules, setNewRules] = useState('')
  const {data = [], isLoading} = useGetRulesQuery()
  const [addRules] = useAddRulesMutation()
  const [deleteRules] = useDeleteRulesMutation()

  if(isLoading) return <p>loading...</p>

  const addList = async () => {
    if(!newRules) {
      alert('Введите текст')
      return
    } else {
      await addRules({text: newRules}).unwrap()
      setNewRules(' ')
    }
  }

  const removeList = async (id) => {
    if(window.confirm('Удалить пункт?')) {
      await deleteRules(id).unwrap()
    }
  }

  return (
    <div className='rules'>
      <div className='terms-info'>
        <div className='title-low'>Условия бронирования</div>
        <div className='block-description'>
          <ol>
          {data.map(item => (
            <li className='block-name'>
              <textarea 
                type='text' 
                name='block'
                className='block-name__input'
                defaultValue={item.text}/>
              <button className='button-deleate' onClick={() => {removeList(item.id)}}></button>
            </li>
            ))}
          </ol>
          <textarea 
            type='text' 
            name='block'
            className='block-name__input'
            onChange={event => setNewRules(event.target.value)}/>
          <button className='rules-add' onClick={addList}>Добавить</button>
        </div>
      </div>
    </div>
  )
}

export default Rules