<script>
    export let params = {};
    $: [ location ] = params;

    import {getRecentlyUpdated} from '/modules/mangadex.js';
    import {link} from 'svelte-spa-router';

    let updated = getRecentlyUpdated();
</script>

{#await updated}
    <p>loading...</p>
{:then value}
    {#each value.data.results as manga}
        <div class="my-8">
            <a href={`/manga/${manga.data.id}`} use:link>
                <h1>{manga.data.attributes.title.en}</h1>
                <p>{manga.data.attributes.description.en}</p>
            </a>
        </div>
    {/each}
{:catch error}
    <p>something went wrong</p>
    <p>{error.message}</p>
{/await}