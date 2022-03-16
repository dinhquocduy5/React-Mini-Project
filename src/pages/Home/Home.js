import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import axios from 'axios'

function Home() {
    const [data,setData] = useState([]);

    useEffect(()=>{
        async function fetchData(){
        const response =  axios.get('https://fakestoreapi.com/products?limit=5');
        setData( (await response).data)
    }
        fetchData()
    }
    ,[])


  return (
    <div className={styles.listProduct}>
        {
            data.length === 0 ? (<h1>Loading...</h1>) :
            data.map((item,key)=>(
                <div className={styles.item} style={{backgroundImage: `url(${item.image})`}} key={key}>
                    <div className={styles.overlay}>
                        <h2 className={styles.title}>{item.title}</h2>
                        <span className={styles.price}>${item.price}</span>
                    </div> 
                </div>
            ))
        }
    </div>
  )
}

export default Home