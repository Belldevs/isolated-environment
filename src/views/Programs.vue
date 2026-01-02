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
          <a class="cpd-link" href="https://docs.google.com/forms/d/e/1FAIpQLSe65fsFijneco1HdjaQ7c0W48plOwiQuvEFxvDI15SNuZdFbw/viewform">Register Now</a>
        </div>
      </div>
    </div>

    <div class="courses-container">

   <div class="course-card diploma-card">
        <div class="card-image">
          <img src="@/assets/images/diploma.jpeg" alt="Diploma"/>
        </div>
        <div class="card-text">
          <h3>EDUBALL CERTIFICATIONS</h3>
          <p>
            Eduball Academy offers practical,
             recognized coaching certifications
              for football coaches at all levels. 
              Our programs combine modern coaching methods, 
              hands-on training, and theory, helping coaches 
              develop tactical skills, plan effective sessions,
               and advance their careers.
          </p>
        </div>
      </div>

      <div class="course-card">
        <div class="card-image">
          <img src="@/assets/images/eduball-img-2.jpg" alt="Football Academy"/>
        </div>
        <div class="card-text">
          <h3>Football Academy</h3>
          <p>Our football camps focus on providing players with 
            an <b>immersive</b> and <b>comprehensive</b> training experience. 
            These camps are designed to refine technical skills, 
            <b>improve tactical knowledge,</b> and enhance overall performance.</p>
        </div>
      </div>

      <div class="course-card">
        <div class="card-image">
          <img src="@/assets/images/online-class.jpg" alt="Webinars"/>
        </div>
        <div class="card-text">
          <h3>Webinars</h3>
          <p>Join our webinars to learn from industry experts and thought leaders on a variety of football-centric topics and management strategies.</p>
        </div>
      </div>

   
    </div>
  </div>
</template>

<style scoped>
/* --- BASE & UTILITIES --- */
.programs-page {
  background: #111;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  color: white;
}

/* --- HEADING --- */
.heading-container {
  padding: clamp(40px, 8vw, 80px) 20px;
  text-align: center;
}

.heading-container h1 {
  font-family: 'Cabin', sans-serif;
  font-size: clamp(24px, 5vw, 32px);
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* --- HERO SECTION --- */
.program-hero {
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.program-image-wrapper {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 800px;
  text-align: center;
}

.hero-text h1 {
  font-family: 'Karla', sans-serif;
  font-size: clamp(1.8rem, 7vw, 3.5rem);
  margin-bottom: 20px;
  line-height: 1.1;
}

.colored {
  background: linear-gradient(90deg, #12DDF3, #0AF128);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-text p {
  font-family: 'Cabin', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: #e0e0e0;
  line-height: 1.6;
  margin-bottom: 30px;
}

.cpd-link {
  display: inline-block;
  text-decoration: none;
  background: white;
  color: black;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: bold;
  font-family: sans-serif;
  transition: 0.3s ease;
}

.cpd-link:hover {
  background: #0AF128;
  transform: translateY(-3px);
}

/* --- COURSES GRID --- */
.courses-container {
  padding: 40px 5%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Automatically flows */
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

/* --- COURSE CARDS --- */
.course-card {
  display: flex;
  flex-direction: column; /* Mobile First: Stacked */
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  border: 1px solid #333;
}

.course-card:hover {
  transform: translateY(-10px);
  border-color: #209a20;
}

.card-image {
  width: 100%;
  height: 250px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
}

.card-text {
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-text h3 {
  font-size: 24px;
  margin-bottom: 15px;
  font-family: 'Karla', sans-serif;
  color: white;
}

.soon {
  font-size: 14px;
  color: #12f325;
  display: block;
}

.card-text p {
  font-size: 15px;
  line-height: 1.6;
  color: #b0b0b0;
  font-family: sans-serif;
}

/* --- BREAKPOINTS --- */
/* For big desktops */
@media (min-width: 1132px) {
  .courses-container {
    padding: 80px 5%;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-template-rows: 2,1fr;
  }

  .course-card {
    flex-direction: row;
 /* Horizontal on large screens */
    height: 800px;
  }
  
  /* Make the Diploma card span the full width if you want it to stand out */
  .diploma-card {
    grid-column: 1 / -1; 
  }

  .card-image {
    width: 40%; /* Image takes 40% width */
    height: 100%;
  }

  .card-text {
    width: 40%;
    
  }
}
/* For Desktop/Laptops: Turn cards into Row layout */
@media (min-width: 1024px) {
  .courses-container {
    padding: 80px 5%;
  }

  .course-card {
    flex-direction: row; /* Horizontal on large screens */
    height: 350px;
  }
  
  /* Make the Diploma card span the full width if you want it to stand out */
  .diploma-card {
    grid-column: 1 / -1; 
  }

  .card-image {
    width: 40%; /* Image takes 40% width */
    height: 100%;
  }

  .card-text {
    width: 60%;
  }
}

@media (max-width: 768px) {
  .hero-content {
    width: 95%;
  }
  
  .program-hero {
    height: auto;
    padding: 100px 0;
  }
}
</style>