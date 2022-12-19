<script setup>
import { ref, onMounted } from 'vue'
import { usePokemon } from './services/pokemon'
import select2 from './components/select-component.vue'

const apiPokemon = usePokemon()

const options = ref([])
const options2 = ref([{ id: 1, text: 'uno' }, { id: 2, text: 'dos' }])

const selected = ref('')
const selected2 = ref('2')

onMounted( async () => {
  try {
    const { data } = await apiPokemon.getPokemones()
    options.value = data.results.map((el) => {
      return {
        id: el.name,
        text: el.name
      }
    })
  } catch (error) {
    console.log(error)
  }
})

</script>

<template>
  <div class="caja">
    <button type="button" class="btn btn-primary">button</button>
    <div class="form-group">
      <label for="">Select {{ selected }}</label>
      <select2 :options="options" v-model="selected">
      </select2>
    </div>
    <div class="form-group">
      <label for="">Select {{ selected2 }}</label>
      <select2 :options="options2" v-model="selected2">
      </select2>
    </div>
  </div>
</template>

<style>
body, html {
  background-color: #ddd;
}
.caja {
  margin: 0 auto;
  height: 100vh;
  padding: 20px;
  width: 75%;
  background-color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
