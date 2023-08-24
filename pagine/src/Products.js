import React from 'react'

const Products = ({name, qty}) => {
  return (
    <div><h3>{name}</h3>
    <span>{qty}</span></div>
  )
}

export default Products