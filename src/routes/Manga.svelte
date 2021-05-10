<script>
    import Router from 'svelte-spa-router'

    import List from './manga/List.svelte'
    import Display from './manga/Display.svelte'

    const routes = new Map()

    routes.set(/^\/manga\/(.+?)(?:\/?|\/.*)$/, Display)
    routes.set(/^\/manga\/?$/, List)

    export let params = [];
    $: [ location ] = params

</script>

<Router {routes} />