import { useState } from "react"

export const useForm = ( initialState = {}) => {

    const [values, setValues] = useState(initialState);

    // Desestructura el target del event para obtener la informacion del input
    const handleInputChange = ({ target }) => {
        
        setValues({
            ...values,
            [target.name]: target.value
        });

    };

    // Resetea el valor del input
    const reset = () => {
        setValues(initialState);
    };

    return [ values, handleInputChange, reset ];

}
