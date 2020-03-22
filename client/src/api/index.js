import { getEnv } from '../helper/env/getEnv'
import { getCookie } from './storage/cookies'
import axios from 'axios'
import { COOKIE_KEY } from './storage/sessionStorage'
import { logout } from './auth/auth'
import Paths from '../routes/Paths'

// const baseUrl = getEnv("BACKEND")

export const createApiRequest = async ({ url, method, data, params }) => {
    try {
        const { data: resp } = await axios({
            method,
            url: `${url}`,
            data,
            params,
        })
        return {
            success: true,
            data: resp,
        }
    } catch (e) {
        const { response } = e
        console.log(response)
        const message = response ? response.data.message : e.message || e

        return {
            success: false,
            data: message,
        }
    }
}

export const createAuthApiRequest = async ({ url, method, data, params, isFormData, props }) => {
    try {
        const token = getCookie(COOKIE_KEY.TOKEN)
        if (token) {
            const { data: resp } = await axios({
                method,
                url: `${url}`,
                data,
                params,
                headers: {
                    'x-access-token': `${token}`,
                    ...isFormData && { 'Content-Type': 'multipart/form-data' },
                }
            })

            return {
                success: true,
                data: resp,
            }
        }
    } catch (e) {
        const { response } = e
        const errorMessage = response ? response.data.message : e.message || e
        if (response.status && [401, 403].includes(response.status)) {
            logout()
            window.location.href = '/login'
        }

        return {
            success: false,
            message: errorMessage,
        }
    }
}

export const uploadFile = async (url, data, filename, file) => {
    const formData = new FormData();
    const token = getCookie(COOKIE_KEY.TOKEN)
    if (!token) {
        return
    }
    try {
        if (data) {
            Object.keys(data).forEach(key => {
                formData.append(key, data[key]);
            });
        }
        formData.append("avatar", file);
        const { data: resp } = await axios.post(
            `${url}`,
            formData,
            {
                headers: {
                    'x-access-token': `${token}`
                }
            })
        return {
            success: true,
            data: resp,
        }
    } catch (e) {
        const { response } = e
        const errorMessage = response ? response.data.message : e.message || e
        if (response.status && [401, 403].includes(response.status)) {
            logout()
            window.location.href = Paths.Login
        }

        return {
            success: false,
            message: errorMessage,
        }
    }
}

export const uploadFileAdmin = async (url, data, filename, file, id) => {
    const formData = new FormData();
    const token = getCookie(COOKIE_KEY.TOKEN)
    if (!token) {
        return
    }
    try {
        if (data) {
            Object.keys(data).forEach(key => {
                formData.append(key, data[key]);
            });
        }
        formData.append("avatar", file)
        formData.append("id", id)
        const { data: resp } = await axios.post(
            `${url}`,
            formData,
            {
                headers: {
                    'x-access-token': `${token}`
                }
            })
        return {
            success: true,
            data: resp,
        }
    } catch (e) {
        const { response } = e
        const errorMessage = response ? response.data.message : e.message || e
        if (response.status && [401, 403].includes(response.status)) {
            logout()
            window.location.href = Paths.Login
        }

        return {
            success: false,
            message: errorMessage,
        }
    }
}

export const uploadBackground = async (url, data, filename, file, tenchuongtrinh, linkchuongtrinh, ngaydienra, diadiem, maunen, mauchu) => {
    const formData = new FormData();
    const token = getCookie(COOKIE_KEY.TOKEN)
    if (!token) {
        return
    }
    try {
        if (data) {
            Object.keys(data).forEach(key => {
                formData.append(key, data[key]);
            });
        }
        formData.append("background", file)
        formData.append("tenchuongtrinh", tenchuongtrinh)
        formData.append("linkchuongtrinh", linkchuongtrinh)
        formData.append("ngaydienra", ngaydienra)
        formData.append("diadiem", diadiem)
        formData.append("maunen", maunen)
        formData.append("mauchu", mauchu)
        const { data: resp } = await axios.post(
            `${url}`,
            formData,
            {
                headers: {
                    'x-access-token': `${token}`
                }
            })
        return {
            success: true,
            data: resp,
        }
    } catch (e) {
        const { response } = e
        const errorMessage = response ? response.data.message : e.message || e
        if (response.status && [401, 403].includes(response.status)) {
            logout()
            window.location.href = Paths.Login
        }

        return {
            success: false,
            message: errorMessage,
        }
    }
}