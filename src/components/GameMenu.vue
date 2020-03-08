<template>
<div>
    <b-container class="bv-example-row">
    <b-col sm="6" class="mt-5" offset="4">
    <b-card
        title="Welcome to my Trivia App"
        img-src="https://firebasestorage.googleapis.com/v0/b/jquerypost.appspot.com/o/untitled.png?alt=media&token=9fe964be-8335-4b21-9c6f-b0a69df29d32"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
         <hr class="my-4">
        <br>
        <b-button @click="$router.push('/gameplay')" size="lg" class="px-5" variant="outline-primary">
            Start Game
        </b-button>
        
    </b-card>
    </b-col>
    </b-container>
</div>
</template>

<script>

export default {
    name: 'start-game-btn',
}
</script>

<style scoped>

</style>