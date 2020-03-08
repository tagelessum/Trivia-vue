<template>
    <div class="recipe-item">
        <div v-html="quizQuestion.question" class="box">
        </div>
        <b-button size="lg" variant="outline-primary" v-on:click="onclick" v-html="quizQuestion.incorrect_answers[0]">
        </b-button>
        <b-button size="lg" variant="outline-primary ml-3" v-on:click="onclick" v-html="quizQuestion.correct_answer">
        </b-button>
    </div>
</template>

<script>

export default {
      props: {
        quizQuestion: {
            required: true
        },
        goNextQuestion: Function
    },
    methods: {
        onclick() {
            this.$emit('button-clicked')
        }
    }
}
</script>

<style scoped>
.box {
    border: 2px;
    border-color: black;
    border-style:groove;
    border-top: none;
    border-left: none;
    margin: auto;
    max-width: 900px;
}
</style>