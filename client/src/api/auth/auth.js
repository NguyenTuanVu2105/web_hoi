import Paths from '../../routes/Paths'
import {getCookie, removeCookie, setCookie} from '../storage/cookies'
import {COOKIE_KEY, getSessionStorage, SESSION_KEY} from '../storage/sessionStorage'

export const logout = () => {
    removeCookie(COOKIE_KEY.TOKEN);
    removeCookie(COOKIE_KEY.EMAIL);
    removeCookie(COOKIE_KEY.NAME);
    removeCookie(COOKIE_KEY.USER_ID);
    window.location.href = Paths.Login
}

export const getUser = () => {
    let token = getCookie(COOKIE_KEY.TOKEN)
    return token ? {
        token: token,
        email: getCookie(COOKIE_KEY.EMAIL),
        name: getCookie(COOKIE_KEY.NAME),
        userId: getCookie(COOKIE_KEY.USER_ID),
        shop: getSessionStorage(SESSION_KEY.SHOP)
    } : null
}

export const setUserCookies = (token, email, userId, name) => {
    setCookie(COOKIE_KEY.TOKEN, token);
    setCookie(COOKIE_KEY.EMAIL, email);
    setCookie(COOKIE_KEY.NAME, name);
    setCookie(COOKIE_KEY.USER_ID, userId)
}