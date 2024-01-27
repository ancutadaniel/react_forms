import { useState } from 'react'

const useInput = (defaultValue, validationFn) => {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [touched, setTouched] = useState(false);

    const valueIsValid = validationFn(enteredValue);

    const handleInputChange = (event) => {
        setEnteredValue(event.target.value);
        setTouched(false);
    };

    const handleInputBlur = () => {
        setTouched(true);
    };

    return {
        value: enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError: touched && !valueIsValid,
    };
}

export default useInput