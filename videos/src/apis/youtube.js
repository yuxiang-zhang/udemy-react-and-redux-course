import axios from 'axios';




const KEY = 'AIzaSyB837-cdDkG5dB7DFjL3RCQC_M1rsb6lGw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
