<template>
    <b-container class="bv-example-row">
        <b-col sm="6" offset="3">
            <b-jumbotron bg-variant="white" border-variant="dark">
                <template v-slot:header>Question number: {{counter}}</template>
                <template v-slot:lead>
                    <QuizQuestion v-bind:quizQuestion="questions[counter]" @button-clicked="goNextQuestion"/>
                </template>
                <hr class="my-4">
            </b-jumbotron>
        </b-col>
    </b-container>
</template>

<script>

import axios from 'axios';
import QuizQuestion from '../components/QuizQuestion.vue';

export default {
    name: 'GamePlay',

     components: {
        QuizQuestion
    },
    data() {
        return {
            questions: [],
            counter: 0,

        }
    },
    mounted: function() {
        axios.get('https://opentdb.com/api.php?amount=10&type=boolean')
        .then(resp => resp.data)
            .then(resp => {
                this.questions = resp.results || [];
        });
    },
    methods: {
        goNextQuestion() {
            this.counter++
        }
    },
}
</script>

<style scoped>

.display-3 {
    font-size: 20px;
    margin-bottom: 20px;
}
</style>