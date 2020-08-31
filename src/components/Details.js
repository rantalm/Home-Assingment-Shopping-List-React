import React, { useState } from 'react'

function Details(props) {
  const { list, setList } = props
  const selected = list.find((item) => item.selected)

  const { quantity, price, description } = selected ? selected.details : { details: {} }

  const updateDetails = (field, text) => {
    setList((draft) => {
      draft.forEach((item) => {
        if (item.selected) {
          item.details[field] = text
        }
      })
    })
  }

  return (
    <div className="box box-b">
      <h2 className="box-title bg-green">
        <span id="item-details-name"></span>
        {selected ? selected.name.toUpperCase() : ''} DETAILS
      </h2>
      <form action="" method="get" id="details-form" className="details-form">
        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          id="quantity"
          className="details-input"
          value={quantity || ''}
          onChange={(e) => updateDetails('quantity', e.target.value)}
          disabled={selected ? false : true}
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          className="details-input"
          value={price || ''}
          onChange={() => {}}
          disabled={selected ? false : true}
          onChange={(e) => updateDetails('price', e.target.value)}
        />
        <label htmlFor="description">description</label>
        <textarea
          name=""
          id="description"
          cols="30"
          rows="3"
          value={description || ''}
          onChange={() => {}}
          disabled={selected ? false : true}
          onChange={(e) => updateDetails('description', e.target.value)}
        ></textarea>
      </form>
    </div>
  )
}

export default Details
