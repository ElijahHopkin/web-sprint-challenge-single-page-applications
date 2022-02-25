import * as yup from 'yup'

const FormSchema= yup.object().shape ({
    name: yup.string().required("name required to place order").min(2, "name must be at least 2 characters"),
    size: yup.string().oneOf(['Personal Pan', 'Medium', 'Large', 'Feed Me Seymour!'], 'Selection required'),
    cheese: yup.boolean(),
    pepperoni:yup.boolean(),
    vegetables: yup.boolean(),
    chicken: yup.boolean(),
    instructions: yup.string()
})

export default FormSchema