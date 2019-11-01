export const getSessionStorage = (name) => {
    let strObj = window.sessionStorage.getItem(name)
    if (strObj) return JSON.parse(strObj)
    else return null
}

export const setSessionStorage = (name, value) => {
    return window.sessionStorage.setItem(name, JSON.stringify(value))
}

export const removeSessionStorage = (name) => {
    return window.sessionStorage.removeItem(name)
}

export const SESSION_KEY = {
    NEW_PRODUCT_STEP: 'NEW_PRODUCT_STEP',
    NEW_PRODUCT: 'NEW_PRODUCT',
    REDIRECT_URL: 'REDIRECT_URL',
    SHOP: 'SHOP'
}

export const COOKIE_KEY = {
    TOKEN: 'TOKEN',
    EMAIL: 'EMAIL',
    USER_ID: 'USER_ID',
    NAME: 'NAME',
}
