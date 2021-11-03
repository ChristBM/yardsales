import React, { useEffect, useState } from "react"
import axios from "axios"
const API = process.env.API

export function useFetchApi() {

  const [ productApi, setProductApi ] = useState([])
  const [ categories, setCategories ] = useState('all')

  useEffect( async () => {

    if( categories === 'all' )
    {
      const response = await axios(`${API}products`)
      setTimeout( () => setProductApi( response.data ) , 500 )
    }
    else{
      const response = await axios(`${API}products/category/${categories}`)
      setTimeout( () => setProductApi( response.data ) , 500 )
    }

  }, [ categories ] )

  return { productApi, setCategories }
}