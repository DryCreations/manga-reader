<script>
    import Router from 'svelte-spa-router'
    import {wrap} from 'svelte-spa-router/wrap'


    import Long from './reader/Long.svelte'
    import Page from './reader/Page.svelte'

    export let params = [];
    $: [ location, manga_id, chapter_id ] = params;

    export let mangaInfo;

    import {getChapterImages} from '/modules/mangadex.js';
    
    $: routes = (() => {
        let chapterImages = getChapterImages(chapter_id);

        routes = new Map()

        routes.set(/^\/manga\/(.+?)\/(.+?)\/(.+?)(?:\/?|\/.*)$/, wrap({
            component: Page,
            props: { 
                mangaInfo: mangaInfo,
                chapterImages: chapterImages
            }
        }))
        
        routes.set(/^\/manga\/(.+)\/(.+)\/?$/, wrap({
            component: Long,
            props: { 
                mangaInfo: mangaInfo,
                chapterImages: chapterImages
            }
        }))

        return routes;
    })();
</script>

{#await mangaInfo}
    <p>loading...</p>
{:then manga}
    <div class="my-8">
        <h1>{manga.data.data.attributes.title.en}</h1>
    </div>
{:catch error}
    <p>something went wrong</p>
    <p>{error.message}</p>
{/await}

<Router {routes} />