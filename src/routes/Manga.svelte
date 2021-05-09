<script>
    import {getMangaChapters} from '../modules/mangadex.js'

    import {link} from 'svelte-spa-router'


    export let params;

    let mangaPromise = getMangaChapters(params.manga_id, 0, 100)
</script>

<h1>Chapter</h1>


{#await mangaPromise}
    <p>loading...</p>
{:then chapters}   
    {#each chapters.data.results as {data: {attributes: ch, id}},i}
        <p class="my-8">
            <a href={`/chapter/${id}`} use:link>{ch.title}</a>
        </p>
    {/each}
{:catch error}
    <p>something went wrong</p>
    <p>{error.message}</p>
{/await}