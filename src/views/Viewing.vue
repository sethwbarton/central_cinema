<template>
    <video controls>
        <source  src="../assets/video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</template>

<script>
    export default {
        name: 'VideoViewer'
    }
</script>

<style scoped>

video {
    width: 100%;
    height: 100%;
}
</style>