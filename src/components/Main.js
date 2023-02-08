import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Main.css"
import SingleProduct from "./SingleProduct"

const Products = () => {
    const [page, setPage] = useState(1)
    const [ProductsData, setProductsData] = useState(null)
    const [loading, setLoading] = useState(false)

    const getData = async() => {
        setLoading(true)
        try {
            const resData = await axios.get('https://fakestoreapi.com/products', {params: {
                page: page
            }})
            setProductsData(resData.data)
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [page])

  return (
    <div className='Products'>
        <div className='SingleProduct'>
            { ProductsData === null ? (<p>Loading</p>) : (
                ProductsData.map((el) => (
                    <SingleProduct
                        id={el.id}
                        title={el.title}
                        price={el.price}
                        description={el.description}
                        image={el.image}
                    />
                    
                ))
            ) }
        </div>
        <button className="Load"
            onClick={() => setPage(page+1)}
        >
            Load More
        </button>
    </div>
  )
}

export default Products