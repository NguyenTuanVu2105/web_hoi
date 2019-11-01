import {getEnv} from '../helper/env/getEnv'
import {getCookie} from './storage/cookies'
import axios from 'axios'
import {COOKIE_KEY, SESSION_KEY, setSessionStorage} from './storage/sessionStorage'
import {logout} from './auth/auth'
import Paths from '../routes/Paths'
// import {message} from 'antd'


export const createApiRequest = async ({ url, method, data, params }) => {
    try {
        const { data: resp } = await axios({
            method,
            url: url,
            data,
            params,
        })
        return {
            success: true,
            data: resp,
        }
    } catch (e) {
        const { response } = e
        const message = response ? response.statusText : e.message || e

        return {
            success: false,
            message,
        }
    }
}

export const createAuthApiRequest = async ({ url, method, data, params, isFormData , props}) => {
    try {
        const token = getCookie(COOKIE_KEY.TOKEN)
        const { data: resp } = await axios({
            method,
            url: url,
            data,
            params,
            headers: {
                'Authorization': `Bearer ${token}`,
                ...isFormData && {'Content-Type': 'multipart/form-data'},
            }
        })

        return {
            success: true,
            data: resp,
        }
    } catch (e) {
        const { response } = e
        console.log(e)
        const errorMessage = response ? response.statusText : e.message || e
        if (response.status && [401,403].includes(response.status)) {
            logout()
            if (props){
                console.log(props.location)
                console.log(props.location.search)
                setSessionStorage(SESSION_KEY.REDIRECT_URL, props.location.pathname + props.location.search)
            }

            window.location.href = Paths.Login
        }

        return {
            success: false,
            errorMessage,
        }
    }
}

export const createAuthEncodeApiRequest = async ({ url, method, data, params, isFormData , props, encode}) => {
    try {
        const token = getCookie(COOKIE_KEY.TOKEN)
        const { data: resp } = await axios({
            method,
            url: url,
            data,
            params,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Encoding': encode,
                ...isFormData && {'Content-Type': 'multipart/form-data'},
            }
        })

        return {
            success: true,
            data: resp,
        }
    } catch (e) {
        const { response } = e
        const errorMessage = response ? response.statusText : e.message || e
        if (response.status && [401,403].includes(response.status)) {
            logout()
            if (props){
                console.log(props.location)
                console.log(props.location.search)
                setSessionStorage(SESSION_KEY.REDIRECT_URL, props.location.pathname + props.location.search)
            }

            window.location.href = Paths.Login
        } else {
            // message.error(errorMessage)
            window.location.href = Paths.HomePage
        }

        return {
            success: false,
            errorMessage,
        }
    }
}

