<template>
  <div>
    <Search />
    <Details />
  </div>
</template>

<script>
import Search from '../shared/Search.vue';
import Details from '../shared/Details.vue';

export default {
  name: 'Home',
  components: {
    Search,
    Details
  }
}
</script>