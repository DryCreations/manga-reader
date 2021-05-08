import axios from 'axios';

const baseURL = 'https://api.mangadex.org/'

const instance = axios.create({
    baseURL: baseURL,
});

export function getManga(title) {

    let options = {
        contentRating: ['safe', 'suggestive'],
        title: title
    }

    return instance.get('/manga/', {
        data: options
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

function getHomeAddress() {

}