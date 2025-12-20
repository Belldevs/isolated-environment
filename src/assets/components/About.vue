<template>
  <div class="container">
    <div class="container-left">
      <h3>ABOUT US</h3>
    </div>

    <div class="content">
      <div class="container-middle"></div>

      <div class="container-right">
        <p>
          Officially established in 2022, Eduball Academy Limited is
          a private Coach Education Company committed to advancing
          nation-building efforts by offering top-tier education to
          football coaches globally.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ===== DESKTOP DEFAULT ===== */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  background: #101010;
  color: white;
  padding: 100px;
}

.container-left h3 {
  white-space: nowrap;
  font-size: 3.5rem;
  font-family: "Lexend Deca", sans-serif;
}

.content {
  display: flex;
  align-items: center;
  gap: 120px;
}

.container-middle {
  width: 2px;
  height: 200px;
  background-color: white;
}

.container-right {
  max-width: 400px;
}

.container-right p {
  line-height: 1.6;
  font-size: 22px;
  font-family: Arial, serif;
  color: #d3d3d2;
  opacity: 0.7;
}

/* ===== TABLET ===== */
@media (max-width: 1024px) {
  .container {
    padding: 60px;
    flex-direction: column;
    align-items: flex-start;
  }

  .content {
    gap: 60px;
  }

  .container-left h3 {
    font-size: 2.8rem;
  }

  .container-right p {
    font-size: 20px;
  }
}

/* ===== MOBILE ===== */
@media (max-width: 768px) {
  .container {
    padding: 40px 20px;
    gap: 30px;
  }

  .content {
    flex-direction: column;
    gap: 20px;
  }

  .container-middle {
    display: none;
  }

  .container-left h3 {
    font-size: 2.2rem;
  }

  .container-right {
    max-width: 100%;
  }

  .container-right p {
    font-size: 18px;
    line-height: 1.7;
  }
}
</style>
