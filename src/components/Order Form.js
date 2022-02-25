import React from 'react'

const OrderForm= (props) => {
    const {pizzaOrder, change, submit, errors} =props

    const onChange= (evt) => {
        const {name, value, type, checked} = evt.target;
        const valueToUse= type==='checkbox' ? checked: value;
        change(name, valueToUse)
    }

    const onSubmit = (evt) => {


        submit()
    }

    return(
        <>
        <form id="pizza-form" onSubmit= {onSubmit}> 
            <div className="error-container">
                <div>{errors.name}</div>
            </div>
            <div className="order-basics">
                <label>NAME
                    <input id="name-input" 
                    name= "name"
                    type= "text"
                    onChange = {onChange}
                    value= {pizzaOrder.name}
                    />
                </label>
                <label>SIZE
                    <select id= "size-dropdown"
                    onChange= {onChange}
                    value={pizzaOrder.size}
                    name = 'size'>
                        <option value= ''>--Select --</option>
                        <option value= 'personal-pan'>Personal Pan</option>
                        <option value = 'medium'>Medium</option>
                        <option value = 'Large'>Large</option>
                        <option value = 'Xtra Large'>Feed Me Seymour!</option>
                    </select>
                </label>
            </div>
            <div id="toppings-checklist">
                <h4>TOPPINGS</h4>
                    <label>Cheese
                        <input 
                        type= "checkbox"
                        name = "cheese"
                        checked = {pizzaOrder.cheese}
                        onChange={onChange}
                        />
                    </label>

                    <label>Pepperoni
                        <input 
                        type= "checkbox"
                        name = "pepperoni"
                        checked = {pizzaOrder.cheese}
                        onChange={onChange}
                        />
                    </label>

                    <label>Vegetables
                        <input 
                        type= "checkbox"
                        name = "vegetables"
                        checked = {pizzaOrder.cheese}
                        onChange={onChange}
                        />
                    </label>

                    <label>Chicken
                        <input 
                        type= "checkbox"
                        name = "chicken"
                        checked = {pizzaOrder.cheese}
                        onChange={onChange}
                        />
                    </label>
            </div>
            <div className="special instructions">
                <label>SPECIAL INSTRUCTIONS
                    <input id="special-text"
                    name= "instructions"
                    type= "text"
                    onChange={onChange}
                    value= {pizzaOrder.special}
                    />
                </label>
            </div>
            <div>
                <button>Place Order</button>

            </div>

        </form>
        </>
    )

}


export default OrderForm