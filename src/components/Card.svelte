<script>
    import {link} from 'svelte-spa-router'


    export let attributes
    export let id
</script>

<div class="bg-gray-50 my-8 shadow-md p-8">
    <div>
        <img src="https://via.placeholder.com/352x528" alt="cover" class="object-cover"/>
    </div>
    <div>
        <hgroup>
            <h2>{attributes.publicationDemographic}</h2>
            <h1>{attributes.title.en}</h1>
        </hgroup>
        <div>
            {attributes.description.en}
        </div>
        <div>
            <a href="/" use:link>
                new chapters
                <span> updated x ago </span>    
            </a>
        </div>
        <div>
            <a href={`/manga/${id}`} use:link>
                more info
            </a>
        </div>
    </div>
</div>