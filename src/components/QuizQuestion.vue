<template>
    <div class="recipe-item">

        <h1>{{Id + 1}}</h1>
        <div v-html="quizQuestion.question" class="box">
        </div>

         <div class="button" variant=""
          v-html="quizQuestion.correct_answer"
          @click="onclickCorrect(quizQuestion, quizQuestion.correct_answer,Id +1)">
         </div>
         
        <div 
         class="button"
         v-html="quizQuestion.incorrect_answers[0]"
         @click="onclickInCorrect(quizQuestion,quizQuestion.incorrect_answers[0],Id +1)">
        </div>
    </div>
</template>

<script>

export default {
      props: {
        quizQuestion: {
            required: true,
            type: Object
        },
        Id: {
            required: true,
            type: Number
        }
    },
    methods: {
        onclickCorrect(q,a,i) {
            this.$emit('selectedCorrect', q);
            this.$emit('choosenAnswer', a); 
            this.$emit('choosenAnswerID', i); 
        },
        onclickInCorrect(q,a,i) {
            this.$emit('button-clicked');
            this.$emit('selectedWrong', q);
            this.$emit('choosenAnswer', a); 
            this.$emit('choosenAnswerID', i); 
        },

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