import React, { useState } from 'react'
//import { useImmer } from 'use-immer'
import { v4 as uuid } from 'uuid'

function List(props) {
  const { list, setList } = props

  const [newItemName, setNewItemName] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (!newItemName) return

    unSelect()

    setList((draft) => {
      draft.push({
        name: newItemName,
        id: uuid(),
        completed: false,
        selected: true,
        details: {
          quantity: 0,
          price: 0,
          description: '',
        },
      })
    })
    setNewItemName('')
  }

  const updateNewName = (name) => {
    if (!name) return
    setNewItemName((draft) => (draft = name))
  }

  const updateName = (name, key) => {
    setList((draft) => {
      draft.forEach((item) => {
        if (item.id === key) {
          item.name = name
          return
        }
      })
    })
  }

  const selectItem = (key) => {
    setList((draft) => {
      draft.forEach((item) => {
        if (item.id === key) {
          item.selected = true
        } else {
          item.selected = false
        }
      })
    })
  }

  const complete = (key) => {
    setList((draft) => {
      draft.forEach((item) => {
        if (item.id === key) {
          item.completed = !item.completed
        }
      })
    })
  }

  const deleteItem = (key) => {
    setList((draft) => {
      draft.forEach((item, index) => {
        if (item.id === key) {
          draft.splice(index, 1)
        }
      })
    })
  }
  const unSelect = (key) => {
    setList((draft) => {
      draft.forEach((item) => {
        item.selected = false
      })
    })
  }

  return (
    <div className="box box-a">
      <h2 className="box-title bg-green">ADD YOUR ITEM HERE</h2>
      <form action="" method="get" id="add-item-form" onSubmit={(e) => submitHandler(e)}>
        <div className="list" id="list"></div>
        {list.length
          ? list.map((item) => (
              <div className="item" key={item.id} data-id={item.id}>
                <input type="checkbox" onChange={() => complete(item.id)} />
                <input
                  data-completed={item.completed}
                  data-selected={item.selected}
                  onFocus={() => selectItem(item.id)}
                  // onBlur={() => unSelect(item.id)}
                  className="item-input"
                  type="text"
                  value={item.name}
                  onChange={(e) => updateName(e.target.value, item.id)}
                />
                <span className="delete-item" onClick={() => deleteItem(item.id)}>
                  &#10006;
                </span>
              </div>
            ))
          : ''}
        <div className="item">
          <input
            type="text"
            className="item-input"
            id="new-item"
            placeholder="Add Item"
            onChange={(e) => updateNewName(e.target.value)}
            value={newItemName}
          />
          <input type="submit" className="submit" />
        </div>
      </form>
    </div>
  )
}

export default List
