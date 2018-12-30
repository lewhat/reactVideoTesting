import axios from 'axios';

const KEY = 'AIzaSyA7s3G9-3pi79wBD2ZPExjDi1TKHrD66Bs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})