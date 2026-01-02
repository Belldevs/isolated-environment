<template>
  <div class="sponsor-page">
    <div class="sponsor-card">

      <!-- Images Section -->
      <div class="images">
        <div class="image-box" v-if="partnership.logo1">
          <img
            :src="partnership.logo1"
            :alt="partnership.name + ' logo 1'"
          />
        </div>

        <div class="image-box" v-if="partnership.logo2">
          <img
            :src="partnership.logo2"
            :alt="partnership.name + ' logo 2'"
          />
        </div>
      </div>

      <!-- Details Section -->
      <div class="details">
        <h2 class="name">{{ partnership.name }}</h2>
        <p class="description">{{ partnership.description }}</p>
        <p class="since">Since: {{ partnership.since }}</p>

        <div v-if="partnership.website" class="website">
          <a
            :href="partnership.website"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import eduballLogo from "@/assets/images/logo.png";
import edulabLogo from "@/assets/images/beyourbest.png";

export default {
  name: "SponsorView",
  data() {
    return {
      partnership: {
        name: "EDUBALL ACADEMY & BE YOUR BEST",
        logo1: eduballLogo,
        logo2: edulabLogo,
        description:
          "The partnership between Eduball Academy and Be Your Best combines structured coach education with a global performance-focused philosophy. Together, they deliver football camps and training programs that develop technical skills, tactical understanding, and professional coaching standards, creating clear pathways for long-term growth for both coaches and players.",
        since: "2025",
        website: "https://www.beyourbest.com/en-us",
      },
    };
  },
};
</script>

<style scoped>
/* Page */
.sponsor-page {
  padding: clamp(20px, 5vw, 80px);
  font-family: 'Cabin', sans-serif;
  background: #111;
  min-height: 100vh;
  color: white;
}

/* Card */
.sponsor-card {
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: #101010;
  border-radius: 18px;
  padding: clamp(20px, 4vw, 40px);
  max-width: 1100px;
  margin: 0 auto;
}

/* Images */
.images {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.image-box {
  width: 60%;
  max-width: 420px;
  aspect-ratio: 3 / 2;
  border-radius: 14px;
  overflow: hidden;
  background: #000;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Details */
.details {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.name {
  font-size: clamp(1.4rem, 4vw, 1.9rem);
  margin-bottom: 12px;
}

.description {
  font-size: clamp(0.95rem, 2.5vw, 1rem);
  line-height: 1.6;
  opacity: 0.9;
}

.since {
  font-size: 0.85rem;
  opacity: 0.75;
  margin-top: 8px;
}

.website {
  margin-top: 24px;
}

.website a {
  display: inline-block;
  background: #15ba73;
  color: #111;
  padding: 12px 32px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s ease;
}

.website a:hover {
  transform: translateY(-2px);
}

/* Tablet */
@media (min-width: 768px) {

  .details {
    text-align: left;
    margin: 0;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .sponsor-card {
    flex-direction: row;
    align-items: center;
  }

  .images {
    flex-direction: column;
    flex: 0 0 45%;
  }

  .details {
    flex: 1;
  }
}
</style>
