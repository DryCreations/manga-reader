<script>
    import {getChapterImages} from '../modules/mangadex.js'

    export let params;

    let imagePromise = getChapterImages(params.chapter_id)

</script>

<h1>Chapter</h1>


{#await imagePromise}
    <p>loading...</p>
{:then images}   
    {#each images as image,i}
        <img src={image} alt={`page ${i}`} />
    {/each}
{:catch error}
    <p>something went wrong</p>
    <p>{error.message}</p>
{/await}