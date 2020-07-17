import {EMAIL_REGEX} from '../constants'
export const isValidEmail = (email) => {
    return EMAIL_REGEX.test(email)
}