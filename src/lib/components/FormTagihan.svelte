<script>
    import {goto} from '$app/navigation';

    let {title, info}= $props();
</script>

<div class="mb-10 mt-10">
  <div class="border-2 border-gray-300 rounded-xl p-6 shadow-md bg-white flex items-center justify-between">
    
    
    <div class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="40px" fill="#48752C">
        <path d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33V-494H146.67v267.33H546V-160H146.67Zm0-480h666.66v-93.33H146.67V-640ZM773.33-80v-120h-120v-66.67h120v-120H840v120h120V-200H840v120h-66.67ZM146.67-226.67V-733.33v506.66Z"/>
      </svg>
      <div class="ml-5">
        <h4 class="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
        <p class="text-gray-600">{info}</p>
      </div>
    </div>



  </div>
</div>
