export const changeMethod = (obj, setValue, e) => {
    setValue({...obj, [e.target.name]: e.target.value})
}

export const validateRegex = (regex, value) => {
    return regex.test(value)
}

export const validateEmail = (email) => {
    return email ? validateRegex(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/, email) : null
}


