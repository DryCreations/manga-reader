<script>
    export let params = [];
    $: [ location, manga_id, chapter_id ] = params;

    export let mangaInfo;
    export let chapterImages;
</script>

{#await chapterImages}
    <p>loading...</p>
{:then imageUrls}
    {#each imageUrls as image,i}
        <img src={image} alt={`page ${i}`} />
    {:else}
        <p>no images</p>
    {/each}
{:catch error}
    <p>something went wrong</p>
    <p>{error.message}</p>
{/await}
