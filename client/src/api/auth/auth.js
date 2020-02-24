import Paths from '../../routes/Paths'
import {getCookie, removeCookie, setCookie} from '../storage/cookies'
import {COOKIE_KEY} from '../storage/sessionStorage'
import { getUserProfile } from '../base/profile';

export const logout = () => {
    removeCookie(COOKIE_KEY.TOKEN)
    window.location.href = Paths.Login
}

export const getUser = async () => {
    let token = getCookie(COOKIE_KEY.TOKEN)
    let role = getCookie(COOKIE_KEY.ROLE)
    let user = {}
    if (token) {
        const result = await getUserProfile()
        if (result.success) {
            user = result.data
        } else {
            return null
        }
    }
    return token ? {
        token: token,
        name: user.Hovaten,
        id: user.id,
        code: user.Sothethanhvien,
        role: role
    } : null
}

export const checkAuth = () => {
    return getCookie(COOKIE_KEY.TOKEN) ? true : false
}

export const setUserCookies = (token, role) => {
    setCookie(COOKIE_KEY.TOKEN, token)
    setCookie(COOKIE_KEY.ROLE, role)
}

