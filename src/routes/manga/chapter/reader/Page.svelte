<script>
    export let params = [];
    $: [ location, manga_id, chapter_id, page_num ] = params;

    export let mangaInfo;
    export let chapterImages;
</script>

{#await chapterImages}
    <p>loading...</p>
{:then imageUrls}
    {#if imageUrls[page_num]}
        <img src={imageUrls[page_num]} alt={`page ${page_num}`} />
    {:else}
        <p>page not found</p>
    {/if}
{:catch error}
    <p>something went wrong</p>
    <p>{error.message}</p>
{/await}