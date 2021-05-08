<script>
	import Router from 'svelte-spa-router'

	import Home from './routes/Home.svelte'
	import Author from './routes/Author.svelte'
	import Chapter from './routes/Chapter.svelte'
	import Manga from './routes/Manga.svelte'
	import About from './routes/About.svelte'
	import NotFound from './routes/NotFound.svelte'

	import Header from './components/Header.svelte'

	const routes = {
		'/': Home,
		'/manga/': Manga,
		'/author/': Author,
		'/chapter/': Chapter,
		'/about/': About,
		'*': NotFound
	}
</script>


<Header />
<main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
	<Router {routes} />
</main>
<footer class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
	<p>Made with 💜 by Hayden Mankin</p>
	<p>Powered by Svelte, Tailwind, and the Mangadex API</p>
</footer>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>