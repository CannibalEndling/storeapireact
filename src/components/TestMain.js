import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Main.css"
import {TestSingleProduct, Readmore} from "./TestSingleProduct"

const Products = () => {
    const [page, setPage] = useState(1)
    const [ProductsData, setProductsData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [ReadData, setReadData] = useState(null)

    const getData = async() => {
        setLoading(true)
        try {
            const resData = await axios.get('https://fakestoreapi.com/products', {params: {
                page: page
            }})
            setProductsData(resData.data)
            setReadData(resData.data)
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
        <div className='testSingleProduct'>
            { ReadData === null ? (<p>Loading</p>) : (
                ReadData.map((el) => (
                    <Readmore 
                        title={el.title}
                        price={el.price}
                        description={el.description}
                        image={el.image}/>

                    
                ))
            ) }
            { ProductsData === null ? (<p>Loading</p>) : (
                ProductsData.map((el) => (
                    <TestSingleProduct
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