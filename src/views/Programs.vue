<template>
  <div class="programs-page">
    <div class="heading-container">
      <h1>Our Programs</h1>
    </div>

    <div class="program-hero">
      <div class="program-image-wrapper">
        <img src="@/assets/images/eduball-img-15.jpg" alt="CPD Workshop" class="hero-img"/>
        <div class="overlay"></div>
      </div>

      <div class="hero-content">
        <div class="hero-text">
          <h1><span class="colored">2026</span> CPD WORKSHOP</h1>
          <p>
            Our Continuous Professional Development (CPD) workshops are meticulously 
            designed to enhance your skills and expand your tactical knowledge of on-field plays.
          </p>
          <a class="cpd-link" href="https://docs.google.com/forms/d/e/1FAIpQLSeFkBl7v83Tx-C-1yjbK8Y82z2Rk3U8Z8MJtKdF1CbAwWPCug/viewform">Join waitlist</a>
        </div>
      </div>
    </div>

    <div class="courses-container">
        <div class="academy">
            <div class="academy-image">
                <img  src="@/assets/images/eduball-img-2.jpg" alt="Image of three boys on a soccer field,three holding a football."/>
            </div>
            <div class="academy-text">
                <h3>Football Academy</h3>
                <p>Our football camps focus on providing players with 
                    an immersive and comprehensive training experience. 
                    These camps are designed to refine technical skills, 
                    improve tactical knowledge, and enhance overall 
                    performance on the field.</p>
            </div>
        </div>

        <div class="webinar">
            <div class="webinar-image">
                <img  src="@/assets/images/online-class.jpg" alt="Image of three boys on a soccer field,three holding a football."/>
            </div>
            <div class="webinar-text">
                <h3>Webinars</h3>
                <p>Join our webinars to learn from industry experts and 
                    thought leaders on a variety of topics.</p>
            </div>
        </div>


    </div>

  </div>
</template>

<script>
export default {
  name: 'ProgramHero',
}
</script>

<style scoped>
/* Reset and Container */
.programs-page {
  background: #111;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

/* Heading Styling */
.heading-container {
  padding: 80px 20px 40px 20px;
  color: white;
  text-align: center;
}

.heading-container h1 {
  font-family: 'Cabin', sans-serif;
  font-size: 32px;
  letter-spacing: 2px;
}

/* Hero Section Layout */
.program-hero {
  position: relative;
  width: 100%;
  height: 60vh; /* Set a consistent height */
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Background Image & Overlay */
.program-image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%; /* Focus on the field/people */
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6); /* Darker for better text readability */
}

/* Text Content Styling */
.hero-content {
  position: relative;
  z-index: 2; /* Sits above the image/overlay */
  width: 90%;
  max-width: 1000px;
  text-align: center;
  padding: 20px;
}

.hero-text h1 {
  font-family: 'Karla', sans-serif;
  font-size: clamp(1.8rem, 6vw, 4rem);
  color: white;
  margin-bottom: 20px;
}

.colored {
   background: linear-gradient(90deg, #12DDF3, #0AF128);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; /* Your brand red */
}

.hero-text p {
  font-family: 'Cabin', sans-serif;
  font-size: clamp(1rem, 2vw, 1.4rem);
  color: #e0e0e0;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto 20px auto;
}
.cpd-link{
    text-decoration: none;
  background:white;
    color:black;
    padding:10px 25px;
    border-radius:20px;
    font-family: sans-serif;
}
.cpd-link:hover{
  color:white;
  transition:.2s ease-in-out;
    background:black;
}
.courses-container{
    padding:80px;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    gap:20px;
}
.academy,.webinar{
    height:400px;
    width:auto;
    display:flex;
    background:red;
}
.academy-image img, .webinar-image img{
    object-fit: cover;
    height:100%;
    width:auto;
}
.academy-text{
  
}
/* --- RESPONSIVE FIXES --- */

/* Tablets (iPad/Portrait) */
@media (max-width: 768px) {
  .heading-container {
    padding: 60px 20px 20px 20px;
  }
  
  .program-hero {
    height: 50vh;
  }
}

/* Mobile (Phones) */
@media (max-width: 480px) {
  .heading-container {
    padding: 40px 15px 10px 15px;
  }

  .program-hero {
    height: auto;
    padding: 60px 0; /* Let content dictate height on small screens */
  }

  .hero-text h1 {
    font-size: 2rem;
  }

  .hero-text p {
    font-size: 1rem;
    padding: 0 10px;
  }
}
</style>