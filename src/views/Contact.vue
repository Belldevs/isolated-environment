<template>
  <div class="container">
    <div class="left">
      <img src="@/assets/images/eduball-img-1.jpg" alt="Three boys on a field holding a ball" />
    </div>

    <div class="right">
      <h3><span class="green">Got questions?</span> Reach out to us!</h3>
      
      <form action="https://formspree.io/f/mbldnqvj" method="POST">
        <div class="mb-4">
          <label for="name" class="text-label">Full Name</label>
          <input type="text" id="name" name="name" required class="input-field">
        </div>

        <div class="mb-4">
          <label for="email" class="text-label">Email Address</label>
          <input type="email" id="email" name="email" required class="input-field">
        </div>

        <div class="mb-4">
          <label for="message" class="text-label">Your Message</label>
          <textarea id="message" name="message" rows="5" required class="input-field"></textarea>
        </div>

        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: #111;
  /* Responsive padding using clamp for smoother scaling */
  padding: clamp(60px, 10%, 120px) 5% 60px 5%;
  display: flex;
  width: 100%;
  gap: 5%;
  flex-direction: row;
  align-items: flex-start;
  min-height: 100vh;
}

.left {
  width: 50%;
  display: flex;
  justify-content: center;
}

.left img {
  width: 100%;
  max-width: 600px;
  height: 600px; /* Fixed height for desktop alignment */
  object-fit: cover;
  border-radius: 15px;
  /* Ensures the photo doesn't look 'cut off' in a bad spot */
  object-position: center 20%; 
}

.right {
  display: flex;
  flex-direction: column;
  width: 50%;
  color: white;
}

.right h3 {
  font-size: clamp(28px, 4vw, 36px);
  font-family: 'Cabin', sans-serif;
  margin-bottom: 20px;
}

.green {
  color: #63BE43;
}

.mb-4 {
  font-family: 'Karla', sans-serif;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
}

.text-label {
  margin-bottom: 8px;
  font-size: 18px;
  font-family: sans-serif;
  color: #ccc;
}

.input-field {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: border-color 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: #63BE43;
}

.submit-btn {
  background: linear-gradient(90deg, #08656f, #057f15);
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  width: fit-content;
  transition: transform 0.2s ease;
}

.submit-btn:hover {
  transform: scale(1.05);
}

/* --- RESPONSIVE DESIGN --- */

@media (max-width: 1024px) {
  .container {
    flex-direction: column;
    padding: 80px 5%;
    gap: 40px;
  }

  .left, .right {
    width: 100%;
  }

  .left img {
    height: 400px; /* Reduced height for tablets */
    max-width: 100%;
  }

  .right h3 {
    text-align: center;
  }
}

@media (max-width: 600px) {
  .left img {
    height: 300px; /* Reduced height for mobile phones */
  }
  
  .submit-btn {
    width: 100%; /* Full width button on mobile */
  }
}
</style>