<template>
  <div>
    <button class='w-full text-center border rounded-lg p-1'>
      {{text}}
    </button>
  </div>
</template>

<script>
export default {
  props : ['text'],
}
</script>
