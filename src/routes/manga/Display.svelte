<script>
    export let params = [];
    $: [ location, manga_id ] = params;

    import Router from 'svelte-spa-router'
    import {wrap} from 'svelte-spa-router/wrap'


    import List from './chapter/List.svelte'
    import Display from './chapter/Display.svelte'

    import {getManga} from '/modules/mangadex.js';

    $: routes = (() => {
        let mangaInfo = getManga(manga_id);

        routes = new Map()

        routes.set(/^\/manga\/(.+?)\/(.+?)(?:\/?|\/.*)$/, wrap({
            component: Display,
            props: { 
                mangaInfo: mangaInfo 
            }
        }))
        
        routes.set(/^\/manga\/(.+?)\/?$/, wrap({
            component: List,
            props: { 
                mangaInfo: mangaInfo 
            }
        }))

        return routes;
    })();
</script>

<Router {routes} />