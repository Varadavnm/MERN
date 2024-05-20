import React from 'react'
import Navbar from '../../components/common/Navbar/Navbar'
import ProductListBody from '../../components/ProductlistBody/ProductListBody'

const Productlist = () => {
  return (
    <div className="d-flex flex-column vh-100 bg-body-secondary ">
        < Navbar />
        <ProductListBody />

    </div>
  )
}

export default Productlist