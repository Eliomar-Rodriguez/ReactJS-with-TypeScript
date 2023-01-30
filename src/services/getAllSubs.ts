import { SubsResponseFromApi, Sub } from './../types.d';
import axios from 'axios'

export const getAllSubs = () => {
    return fetchSubs().then(mapFromApiToSubs)
}

export const fetchSubs = async (): Promise<SubsResponseFromApi> => {
    const response = await axios
        .get('http://locahost:3001/subs')
    return response.data
}

export const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
    return apiResponse.map(subFromApi => {
        const {
            nick,
            months: subMonths,
            profileUrl: avatar,
            description
        } = subFromApi

        return { nick, description, avatar, subMonths }
    })
}
