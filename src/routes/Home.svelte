<script>
    import {getRecentlyUpdated} from '../modules/mangadex.js'

    import Card from '../components/Card.svelte'
import { attr } from 'svelte/internal';

    let mangaList = getRecentlyUpdated()


</script>

{#await mangaList}
    <p>loading...</p>
{:then list}
    {#each list.data.results as {data: {attributes}, id}}
        <Card attributes={attributes} id={id} />
    {/each}
{:catch error}
    <p>something went wrong</p>
    <p>{error.message}</p>
{/await}