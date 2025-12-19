<template>
  <div class="container">

    <!-- LEFT TEXT -->
    <div class="team-left">
      <h2>MEET THE TEAM</h2>
      <h3>
       Our team consists of UEFA-licensed, experienced football
        and life coaches who bring not only their passion for
         the game, but also their active commitment to EDUBALL’s
          mission 
       of driving sporting excellence across the continent.
      </h3>
    </div>

    <!-- RIGHT GRID -->
    <div class="team-right">
      <div
        class="person"
        v-for="person in people"
        :key="person.name"
      >
        <img :src="person.url" :alt="person.name" />
        <p>{{ person.name }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import seyi from '@/assets/images/seyi.jpg'
import micah from '@/assets/images/micah.jpg'
import sola from '@/assets/images/sola.jpeg'
import yusuf from '@/assets/images/yusuf.jpeg'

export default {
  name: 'MeetTeam',
  data() {
    return {
      people: [
        { name: 'Seyi', url: seyi },
        { name: 'Micah', url: micah },
        { name: 'Sola', url: sola },
        { name: 'Yusuf', url: yusuf }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  padding: 100px;
  justify-content: space-between;
  display: flex;
  background:#000000;
  color:white;
  gap: 80px;
}

/* LEFT SIDE */
.team-left {
  width: 35%;
  display:flex;
  justify-content: space-between;
  flex-direction: column;
}

.team-left h2 {
  font-size: 40px;
   font-family: "Lexend Deca", sans-serif;
  margin-bottom: 20px;
   background: linear-gradient(90deg, #12DDF3, #0AF128);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.team-left h3 {
  font-size: 24px;
  color:#cececc;
  font-family:'Arial',sans-serif;
  width:95%;
  font-weight: 300;
}

/* RIGHT GRID */
.team-right {
  width: 45%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 5px;
}

/* PERSON CARD */
.person {
  display: flex;
  padding:2.5px;
  flex-direction: column;
  align-items: center; /* centers name horizontally */
  text-align: center;
}

.person img {
  width: 140px;
  height: 120px;
  object-fit: cover;
  object-position: center 25%;
}


.person p {
  margin-top: 12px;
  font-size: 18px;
 font-family:'Arial',serif;
  font-weight: 500;
}

</style>
