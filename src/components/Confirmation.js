import React from 'react'
import {Route} from 'react-router-dom'
import OrderForm from './Order Form'


const Confirmation = () => {

    return (
        <>
        
       <h2>Hello!</h2>
        <div>
            <Route path = '/pizza'>
                <OrderForm />
            </Route>
        </div> 
       </>
    )
}

export default Confirmation