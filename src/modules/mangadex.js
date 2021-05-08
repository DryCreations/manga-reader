import axios from 'axios'
import qs from 'qs'



const baseURL = 'https://api.mangadex.org/'

const instance = axios.create({
    baseURL: baseURL,
});

instance.interceptors.request.use(config => {
    config.paramsSerializer = params => {
      return qs.stringify(params, {
        arrayFormat: "brackets",
        encode: false
      });
    };
    return config;
  });

export function getManga(title) {

    let params = {
        contentRating: ['safe', 'suggestive'],
        title: title,
    }

    return instance.get('/manga/', {
        params
    })
    .then(response => {
        console.log(response)

        return response
    })
    .catch(error => {
        console.log(error)
    })
}

export function getMangaChapters() {

}

export function getChapterImages() {

}

export function getRecentlyUpdated() {
    let params = {
        order: {
            updatedAt: 'asc',
            createdAt: 'asc',
        },
        limit: 100,
        offset: 0,
    }

    return instance.get('/manga/', {
        params
    })
    .then(response => {
        console.log(response)

        console.log(JSON.stringify(response.data))

        return response
    })
    .catch(error => {
        console.log(error)
    })
}

function getHomeAddress() {

}