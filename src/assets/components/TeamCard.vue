<template>
  <div class="container">

    <!-- LEFT TEXT -->
    <div class="team-left">
      <h2>MEET THE TEAM</h2>
      <h3>
        Our team consists of experienced UEFA-licensed Football Coaches
         who bring not only their passion for
        the game, but also their active commitment to EDUBALL’s
        mission of driving sporting excellence across the continent.
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
        { name: 'Seyi Olofinjana', url: seyi },
        { name: 'Micah Bello', url: micah },
        { name: 'Sola Adegun', url: sola },
        { name: 'Muhammed Yussuf', url: yusuf }
      ]
    }
  }
}
</script>

<style scoped>
/* ===== BASE (MOBILE FIRST) ===== */
.container {
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background: #000;
  color: white;
}

/* LEFT TEXT */
.team-left {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.team-left h2 {
  font-size: 28px;
  font-family: "Lexend Deca", sans-serif;
  background: linear-gradient(90deg, #12DDF3, #0AF128);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.team-left h3 {
  font-size: 18px;
  line-height: 1.6;
  color: #cececc;
  font-family: Arial, sans-serif;
  font-weight: 300;
}

/* RIGHT GRID — 2x2 ON MOBILE */
.team-right {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

/* PERSON CARD */
.person {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* BIGGER IMAGES */
.person img {
  width: 100%;
  max-width: 180px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 10px;
}

/* NAME */
.person p {
  margin-top: 10px;
  font-size: 16px;
  font-family: Arial, serif;
  font-weight: 500;
}

/* ===== TABLET ===== */
@media (min-width: 768px) {
  .container {
    padding: 60px;
  }

  .team-left h2 {
    font-size: 34px;
  }

  .team-left h3 {
    font-size: 20px;
  }

  .team-right {
    gap: 32px;
  }

  .person img {
    max-width: 200px;
  }
}

/* ===== DESKTOP ===== */
@media (min-width: 1024px) {
  .container {
    flex-direction: row;
    justify-content: space-between;
    gap: 80px;
    padding: 100px;
  }

  .team-left {
    max-width: 40%;
  }

  .team-right {
    max-width: 50%;
    grid-template-columns: repeat(2, 1fr);
  }

  .team-left h2 {
    font-size: 40px;
  }

  .team-left h3 {
    font-size: 24px;
  }

  .person img {
    max-width: 220px;
  }
}
</style>

