<script>
    export let params = [];
    $: [ location, manga_id ] = params;

    $: console.log(manga_id)

    export let mangaInfo;

    $: chapterList = getMangaChapters(manga_id, 0, 100);;

    import {getMangaChapters} from '/modules/mangadex.js';
    import {link} from 'svelte-spa-router';

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

{#await chapterList}
    <p>loading...</p>
{:then value}
    {#each value.data.results ?? [] as chapter}
        <div class="my-8">
            <a href={`/manga/${manga_id}/${chapter.data.id}`} use:link>
                <h1>{chapter.data.attributes.title}</h1>
                <p>vol. {chapter.data.attributes.volume} ch. {chapter.data.attributes.chapter}</p>
                <p>language: {chapter.data.attributes.translatedLanguage}</p>
            </a>
        </div>
    {:else}
    <div class="my-8">
        <p>no results</p>
    </div>
    {/each}
{:catch error}
    <p>something went wrong</p>
    <p>{error.message}</p>
{/await}