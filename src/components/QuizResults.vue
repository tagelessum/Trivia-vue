<template>
    <div class="header">
        <div v-html="CorrectQuiz[1]">
        </div>
        <div v-html="IncorrectQuiz.question[1]">
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuizResults',

    props: {
        CorrectQuiz: {
            required : true,
            type: Object
        },
        IncorrectQuiz: {
            required: true,
            type: Object
        }
    }
}
</script>

<style scoped>

</style>