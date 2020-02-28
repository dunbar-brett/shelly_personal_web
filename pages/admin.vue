<template>
  <main>
      <h1>Admin</h1>
      <h2>Which Page would you like to edit?</h2>
      <button @click="selection='oil'">Oil</button>
      <button @click="selection='oil'>Watercolor</button>
      <PortolioForm v-show="selection" /> 
  </main>
</template>

<script>
import PortolioForm from '../components/portfolioForm'
export default {
    components: {
        PortolioForm
    },
    data() {
        return {
            selection: null,

        }
    }

}
</script>

<style>

</style>