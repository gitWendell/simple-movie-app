import axios from 'axios';
import { API_BASE, API_KEY } from '../data/constants';

export const getMovies = async ({page = 1, cancelToken}) => {
    try {
        const { data } = await axios.get(`${API_BASE}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`, { cancelToken:cancelToken });

        return data;
    } catch (err) {
        console.log(err)      
    }
}