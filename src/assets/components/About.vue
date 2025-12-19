<template>
  <div class="container">
    <div class="container-left">
      <h3>ABOUT US</h3>
    </div>
    <div class="s">
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

.container-middle {
  width: 2px;
  height: 200px;
  background-color: white;
}

.container-right {
  width:400px;

}

.container-right p {
  line-height: 1.6;
  font-size:22px;
  font-family:'Arial',serif;
  color:#d3d3d2;
  opacity:0.7;
}
.s{
  display:flex;
  justify-content: space-around;
  gap:120px;
}
</style>
