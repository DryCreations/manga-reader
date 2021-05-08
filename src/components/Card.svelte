<script>
    export let attributes
    export let id
</script>

<div>
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
            <button>
                new chapters
                <span> updated x ago </span>    
            </button>
        </div>
        <div>
            <button>
                more info
            </button>
        </div>
    </div>
</div>