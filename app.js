const App={
template:`<header>VueJS</header><hr />
<main><app-main></app-main></main>
<footer>Copyright {{new Date().getFullYear()}}</footer>`
}
const app=Vue.createApp(App)

app.component('app-main', {
data(){
  return{
    questions:[],
   isBtnDisabled:true
  }
},
mounted(){
fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&encode=base64').then(r=>r.json())
.then(res=>this.questions=res.results)
},
methods:{
  base64ToString(s){ return atob(s) }
},
template:`<section>
<p v-for="(data,index) in questions" :key="index">{{base64ToString(data.question)}}
<div v-for="n in 4" :key="n">
<input type="radio" :name="index" :id="index+'-'+n" />
<label :for="index+'-'+n">{{index+'-'+n}}</label>
</div>
</p>

<p v-if="isBtnDisabled">Select all answers to submit paper</p>
<button v-else>Submit Paper</button>
<section>`,
})

app.mount('#app')
