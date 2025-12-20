<template>

<Hero/>
<About/>
<TeamCard/>
<HomeSections/>
<div></div>
   
</template>
<script>
import Hero from '@/assets/components/Hero.vue';
import About from '@/assets/components/About.vue';
import HomeSections from '@/assets/components/VideoCard.vue';
import TeamCard from '@/assets/components/TeamCard.vue';
export default {
    components:{ Hero , About ,TeamCard, HomeSections}
}
</script>
<style scoped>
    h1{
        margin-top:200px;
    }

</style>
