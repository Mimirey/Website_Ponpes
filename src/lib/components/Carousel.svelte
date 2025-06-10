<script>
	import { onDestroy, onMount } from "svelte";

    export let items= [];
    let currentIndex=0;

    const intervalTime=3000;
    let interval;

    export let kegiatan=[];

    function prev() {
        currentIndex=(currentIndex-1 + items.length)%items.length;
    }

    function next() {
        currentIndex=(currentIndex+1)% items.length;
    }

    onMount(()=>{
        interval=setInterval(()=>{
            next();
        },intervalTime);
    })
    onDestroy(()=>{
        clearInterval(interval);
    });
</script>

<div class="carousel">
    <button on:click={prev}>&lt;</button>

    <div class="carousel-item">
        {#if items.length>0}
        <img src={items[currentIndex]} alt=""/>

         <div class="overlay-text">
          <h2>{kegiatan[currentIndex]}</h2>
        </div>
        {:else}
        <p>No items to display</p>
        {/if}
       
    </div>

    <button on:click={next}>&gt;</button>
</div>


