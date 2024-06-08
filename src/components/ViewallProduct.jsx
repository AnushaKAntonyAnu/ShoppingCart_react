import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewallProduct = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (response)=>{
                changeData(response.data)

            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <h3 align="center" ><u>ViewAll Product</u></h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                        
                                {data.map(
                                    (value,index)=>{
                                        return<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                        <img height="200px" src={value.image} class="card-img-top" alt="..."></img>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.id}</h5>
                                                <h5 class="card-title">{value.category}</h5>
                                                <p class="card-text">{value.title}</p>
                                                <h5 class="card-title">{value.price}</h5>
                                                <a href="#" class="btn btn-primary">Buy Now</a>
                                            </div>
                                    </div>
                                    </div>
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default ViewallProduct