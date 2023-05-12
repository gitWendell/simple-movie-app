import axios from 'axios';
import { API_BASE, API_KEY } from '../data/constants';

export const getPopularMovies = async ({cancelToken}) => {
    try {
        const { data } = await axios.get(`${API_BASE}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`, { cancelToken:cancelToken });

        return data;
    } catch (err) {
        console.log(err)      
    }
}