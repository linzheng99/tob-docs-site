import { defineComponent } from 'vue';

export default defineComponent({
  name:'JsxButton',
  setup(props, {slots}) {
    return () => <button 
      class={`
      py-2
      px-4
      rounded-lg
      text-white
      bg-blue-500
      hover:bg-blue-700
      border-none
      cursor-pointer 
      `}
        > 
        {slots.default ? slots.default() : ''}
     </button>
  }
})
