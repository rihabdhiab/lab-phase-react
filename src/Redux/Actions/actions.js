import { ADD_BOOK,IS_CURRENTLY_READ,WANT_TO_READ,IS_READ} from '../Constants/actions-types';

export const add_book= (payload) => {
    return {
        type: ADD_BOOK,
        payload
    }
}
export const isCurrentlyRead = (payload) => {
    return {
        type: IS_CURRENTLY_READ,
        payload
    }
}
export const wantToRead = (payload) => {
    return {
        type: WANT_TO_READ,
        payload
    }
}
export const isRead = (payload) => {
    return {
        type: IS_READ,
        payload
    }
}



