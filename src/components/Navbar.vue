<template>
  <div id="navbar">
    <h2 style="margin-bottom:20px">Stock Trader</h2>
    <ul class="nav nav-pills">
      <router-link to="/" tag="li" activeClass="active" exact><a>Home</a></router-link>
      <router-link to="/portfolio" tag="li" activeClass="active"><a>Portfolio</a></router-link>
      <router-link to="/stocks" tag="li" activeClass="active"><a>Stocks</a></router-link>
    </ul>
    <ul class="nav nav-pills">
      <li @click="endDay"><a>End Day</a></li>
      <li style="padding:10px">
        <select class="dropdown-options" v-model="selectedOption" @input="event => { axiosRequest(event.target.value) }">
          <option v-for="(option,index) in options" :key="index">{{ option.text }}</option>
        </select>
      </li>
      <li style="padding:10px">Funds: ${{ getAvailableFunds }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      options: [
      {value: null, text: "Save/Load Day"},
      {value: "student", text: "Save Day"},
      {value: "classroom", text: "Load Day"}
      ],
      selectedOption: "Save/Load Day"
    };
  },
  computed: {
    ...mapGetters(["getAvailableFunds"])
  },
  methods: {
     ...mapActions([
            'setFromDB'
        ]),
    axiosRequest(event) {
    //   console.log(event);
    let data = this.$store.state;
      if (event === "Save Day") {
          axios.put('https://vuejs-http-2a989.firebaseio.com/day.json', data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
      }
      else if (event === "Load Day") {
          axios.get('https://vuejs-http-2a989.firebaseio.com/day.json')
            .then(res => this.setFromDB(res.data))
            .catch(err => console.log(err))
            
      }
     },
    endDay() {
      let costArray = [];
      for (let i = 0; i < 4; i++) {
        let cost = Math.floor(Math.random() * (180 - 40 + 1) + 40);
        costArray.push(cost);
      }
      this.$store.commit("updatePricing", costArray);
    }
  }
};
</script>

<style scoped>
#navbar {
  color: whitesmoke;
  display:flex; 
  justify-content:space-around; 
  align-items:center; 
  border-bottom: 2px solid whitesmoke; 
  margin-bottom:2%;
}

a, li {
  color: whitesmoke;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 15px;
}

a:hover {
  color: #351263;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 15px;
}

.dropdown-options {
  color: #351263;
}
</style>
