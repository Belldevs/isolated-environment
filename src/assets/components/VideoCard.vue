<template>
  <section class="page">

    <!-- VIDEO CLIPS -->
    <div class="section">
      <h2 class="section-title">VIDEO CLIPS</h2>

      <div class="video-grid">
        <div
          class="video-card"
          v-for="video in videos"
          :key="video.title"
          role="button"
          tabindex="0"
          @click="openVideo(video)"
          @keydown.enter="openVideo(video)"
        >
          <img
            :src="video.thumbnail"
            :alt="video.title"
            loading="lazy"
          />
          <div class="play-icon">▶</div>
          <p class="video-title">{{ video.title }}</p>
        </div>
      </div>

      <a
        class="primary-btn"
        href="https://youtube.com/@eduballacademy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch on YouTube
      </a>
    </div>

    <!-- QUOTE -->
    <div class="quote">
      <img
        class="quote-avatar"
        :src="micah"
        alt="Coach Micah Bello"
      />
      <div class="quote-text">
        <p>“A player is only as good as the pressure you put on him.”</p>
        <span>— Micah Bello</span>
      </div>
    </div>

    <!-- FOOTBALL ACADEMY -->
    <div class="section">
      <h2 class="section-title">Football Academy</h2>
      <p class="subtitle">
        From the little kicks to the grand stages, we’ve got you.
      </p>

      <div class="academy-grid">
        <div
          class="academy-card"
          v-for="group in academy"
          :key="group.title"
        >
          <img
            :src="group.image"
            :alt="group.title"
            loading="lazy"
          />
          <div class="academy-overlay">
            <h4>{{ group.title }}</h4>
            <span>{{ group.age }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- PRIVATE TRAINING -->
    <div class="image-section training">
      <div class="overlay">
        <h3>BOOK A PRIVATE TRAINING SESSION TODAY!</h3>
        <p>Level up your football game with our fleet of UEFA Licensed coaches</p>
        <a href="/book-session" class="primary-btn">
          Book a Session Now
        </a>
      </div>
    </div>

    <!-- ANNOUNCEMENT -->
    <div class="image-section announcement">
      <div class="overlay">
        <h2>BIG ANNOUNCEMENT!!!</h2>
        <p>Calling all coaches in Lagos and beyond for our 2026 workshop</p>
        <a href="/waitlist" class="outline-btn">
          Join the Waitlist
        </a>
      </div>
    </div>

    <!-- VIDEO MODAL -->
    <div
      v-if="activeVideo"
      class="modal"
      tabindex="0"
      @click.self="closeVideo"
      @keydown.esc="closeVideo"
    >
      <iframe
        :src="activeVideo"
        title="Eduball video"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

  </section>
</template>

<script>
import logo from '@/assets/images/logo.png'
import kids from '@/assets/images/eduball-kids.png'
import teens from '@/assets/images/eduball-teens.png'
import adults from '@/assets/images/eduball-img-1.jpg'
import micah from '@/assets/images/micah.jpg'

export default {
  name: 'HomeSections',

  data() {
    return {
      activeVideo: null,
      micah,

      videos: [
        {
          title: 'Coaching Interventions by Seyi Olofinjana',
          thumbnail: logo,
          youtube: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
          title: 'Finishing – by Joseph Olumide',
          thumbnail: logo,
          youtube: 'https://www.youtube.com/embed/38bRgqhG6gY'
        }
      ],

      academy: [
        {
          title: 'EDUBALL KIDS',
          age: 'Ages 9–12',
          image: kids
        },
        {
          title: 'EDUBALL TEENS',
          age: 'Ages 12–16',
          image: teens
        },
        {
          title: 'EDUBALLERS',
          age: 'Ages 17-23',
          image: adults
        }
      ]
    }
  },

  methods: {
    openVideo(video) {
      this.activeVideo = video.youtube
      document.body.style.overflow = 'hidden'
    },
    closeVideo() {
      this.activeVideo = null
      document.body.style.overflow = ''
    }
  }
}
</script>

<style scoped>
.page {
  background: #111;
  color: #fff;
  padding: clamp(24px, 6vw, 80px);
  display: flex;
  flex-direction: column;
  gap: 70px;
  font-family:sans-serif;
}

/* VIDEO GRID */
.video-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.video-card {
  position: relative;
  cursor: pointer;
}
.video-card img {
  width: 100%;
  border-radius: 10px;
}
.play-icon {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 48px;
}
.video-title {
  margin-top: 10px;
  font-family:'Cabin',sans-serif;
}

/* QUOTE */
.quote {
  display: flex;
  gap: 30px;
  max-width: 700px;
  font-family:sans-serif;
  margin: auto;
}
.quote-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

/* ACADEMY */
.academy-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.academy-card {
  position: relative;
}
.academy-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
}
.academy-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,.45);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
}

/* IMAGE SECTIONS */
.image-section {
  position: relative;
  height: clamp(260px, 45vw, 420px);
  border-radius: 14px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}
.image-section.training {
  background-image: url('@/assets/images/training.png');
}
.image-section.announcement {
  background-image: url('@/assets/images/eduball-img-15.jpg');
}
.image-section .overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

/* BUTTONS */
.primary-btn,
.outline-btn {
  margin-top: 16px;
  padding: 14px 32px;
  border-radius: 30px;
  font-family:sans-serif;
  font-weight: 600;
  text-decoration: none;
}
.primary-btn {
  background: #0af128;
  color: #000;
}
.outline-btn {
  border: 1px solid #fff;
  color: #fff;
}

/* MODAL */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.modal iframe {
  width: 90%;
  max-width: 900px;
  aspect-ratio: 16 / 9;
}

/* MOBILE */
@media (max-width: 640px) {
  .video-grid {
    grid-template-columns: 1fr;
  }
  .academy-grid {
    grid-template-columns: 1fr;
  }
  .quote {
    flex-direction: column;
    text-align: center;
  }
}
</style>



