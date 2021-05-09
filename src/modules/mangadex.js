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
        // console.log(response)

        return response
    })
    .catch(error => {
        console.log(error)
    })
}

export function getMangaChapters() {
    let params = {
        
    }
}

export function getChapterImages(id) {
    let params = {

    }

    let chapterInfo = instance.get(`/chapter/${id}`, {
        params
    }).then(response => {

        // console.log(response);

        return response;
    })

    let atHome = instance.get(`/at-home/server/${id}`, {
        params
    }).then(response => {

        // console.log(response);

        return response;
    })

    return Promise.all([chapterInfo, atHome]).then(data => {
        // console.log(data[0])
        // console.log(data[1])

        let baseUrl = data[1].data.baseUrl;
        let hash = data[0].data.data.attributes.hash;
        let mode = 'data'

        let images = data[0].data.data.attributes.data.map(img => `${baseUrl}/${mode}/${hash}/${img}`)

        // console.log(images)

        return images
    })
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
        // console.log(response)

        // console.log(JSON.stringify(response.data))

        return response
    })
}

function getHomeAddress() {

}