<template>
  <div class="container">

    <!-- LEFT TEXT -->
    <div class="team-left">
      <h2>MEET THE TEAM</h2>
      <h3>
        Our team consists of UEFA-licensed, experienced football
        and life coaches who bring not only their passion for
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
/* ===== DESKTOP ===== */
.container {
  padding: 100px;
  display: flex;
  justify-content: space-between;
  gap: 80px;
  background: #000;
  color: white;
}

/* LEFT SIDE */
.team-left {
  flex: 1;
  max-width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.team-left h2 {
  font-size: 40px;
  font-family: "Lexend Deca", sans-serif;
  background: linear-gradient(90deg, #12DDF3, #0AF128);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.team-left h3 {
  font-size: 24px;
  color: #cececc;
  font-family: Arial, sans-serif;
  font-weight: 300;
}

/* RIGHT GRID */
.team-right {
  flex: 1;
  max-width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

/* PERSON CARD */
.person {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.person img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 6px;
}

.person p {
  margin-top: 12px;
  font-size: 18px;
  font-family: Arial, serif;
  font-weight: 500;
}

/* ===== TABLET ===== */
@media (max-width: 1024px) {
  .container {
    padding: 60px;
    flex-direction: column;
    gap: 50px;
  }

  .team-left,
  .team-right {
    max-width: 100%;
  }

  .team-left h2 {
    font-size: 34px;
  }

  .team-left h3 {
    font-size: 22px;
  }
}

/* ===== MOBILE ===== */
@media (max-width: 768px) {
  .container {
    padding: 40px 20px;
  }

  .team-left h2 {
    font-size: 28px;
  }

  .team-left h3 {
    font-size: 18px;
    line-height: 1.6;
  }

  .team-right {
    grid-template-columns: 1fr;
  }

  .person img {
    width: 120px;
    height: 120px;
  }

  .person p {
    font-size: 16px;
  }
}
</style>
