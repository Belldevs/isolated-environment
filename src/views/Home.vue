<template>

<Hero/>
<About/>
<TeamCard/>

<div></div>
   
</template>
<script>
import Hero from '@/assets/components/Hero.vue';
import About from '@/assets/components/About.vue';
import TeamCard from '@/assets/components/TeamCard.vue';
export default {
    components:{ Hero , About ,TeamCard}
}
</script>
<style>
    h1{
        margin-top:200px;
    }
</style>