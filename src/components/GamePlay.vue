<template>
    <b-container class="bv-example-row">
        <b-col sm="6" offset="3">
            <b-jumbotron bg-variant="white" border-variant="dark">
                    <div v-if="this.gameInProgress">
                        <QuizQuestion
                         v-bind:quizQuestion="this.questions[this.i]"
                         v-bind:Id="this.i"
                         @selectedCorrect="CorrectAnswerList"
                         @selectedWrong="IncorrectCorrectAnswerList"
                         @gameInProgress="gameInProgress"
                         @choosenAnswer="userAnswerList"
                         @choosenAnswerId="setChoosenAnswerID">  
                        </QuizQuestion>
                    </div>
                    <div v-else>
                        <GameOver v-bind:QuizChoosenAnswer="this.userAnswerList"
                         v-bind:QuizScore="this.score"
                         v-bind:CorrectQuiz="this.correctAnswer"
                         v-bind:IncorrectQuiz="this.incorrectAnswer">
                        </GameOver>
                    </div>
                <hr class="my-4">
            </b-jumbotron>
        </b-col>
    </b-container>
</template>

<script>

import axios from 'axios';
import GameOver from '../components/GameOver.vue';
import QuizQuestion from '../components/QuizQuestion.vue';

export default {
    name: 'GamePlay',

     components: {
        QuizQuestion,
        GameOver
    },
    data() {
        return {
            questions: [],
            i: 0,
            correctAnswer:[],
            incorrectAnswer:[],
            score:0,
            userAnswerList: [],
            gameInProgress : Boolean

        }
    },
    beforeMount() {
        if (this.i > 9) {
            this.gameInProgress = false;
        }
    },
    created() {

        axios.get('https://opentdb.com/api.php?amount=11&type=boolean')
        .then(resp => resp.data)
            .then(resp => {
                this.questions = resp.results || [];
        });

        this.correctAnswer = [],
        this.incorrectAnswer = [];
        this.i = 0;
        this.gameInProgress = true;
        this.score = 0;
    },
    methods: {

        CorrectAnswerList(e) {
            this.correctAnswer.push(e);
            this.score = this.score + 10;
             if(this.i >= 10){
                this.gameInProgress = false;
            }
            else {
                this.i = this.i +1;
            }
        },
        IncorrectCorrectAnswerList(e) {
            this.incorrectAnswer.push(e);
            if (this.i >= 10) {
                this.gameInProgress = false;
            }
            else {
                this.i = this.i +1;
            }
        },
        Gameover() {
            this.gameInProgress = false;
        },
        getUserAnswerList(e) {
            this.userAnswerList.push(e);
        },
        setChoosenAnswerID(e) {
            this.userAnswerList.push(e);
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