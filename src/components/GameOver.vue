<template>
    <div>
        <h1>GAME OVER</h1>

        <p>You scored</p>
        <p >{{this.QuizScore}}</p>
 
        <div>
            <div @click="showCorrectAnswers" >Display Correct Answers</div>
            <div @click="showFalseAnswers">Display Incorrect Answers</div>
        </div>

        <table v-if="showCorrect" class="table is-fullwidth">
            <thead>
                <tr>
                    <th><abbr title="Question Number">Nr</abbr></th>
                    <th>Questions you answered correctly</th>
                    <th>Correct Answer</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th><abbr title="Question Number">Nr</abbr></th>
                    <th>Questions you answered correctly</th>
                    <th>Correct Answer</th>
                </tr>
            </tfoot>
            <tbody>
                <tr v-for="(question, i) in CorrectQuiz" :key="i">
                    <th>{{i + 1}}</th>
                    <td v-html="CorrectQuiz[i].question"></td>
                    <th>{{CorrectQuiz[i].correct_answer}}</th>
                </tr>
            </tbody>
        </table>

        <table v-if="showFalse" class="table is-fullwidth">
            <thead>
                <tr>
                    <th><abbr title="Question Number">Nr</abbr></th>
                    <th>Questions you answered incorrectly</th>
                    <th>Correct Answer</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th><abbr title="Question Number">Nr</abbr></th>
                    <td>Questions you answered incorrectly</td>
                    <th>Correct Answer</th>
                </tr>
            </tfoot>
            <tbody>
                <tr v-for="(question, i) in IncorrectQuiz" :key="i">
                    <th>{{i + 1}}</th>
                    <td v-html="IncorrectQuiz[i].question"></td>
                    <th>{{IncorrectQuiz[i].correct_answer}}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    name: 'GameOver',
    props:{
         CorrectQuiz: {
            required:true,
            type:Object

        },
        IncorrectQuiz: {
            required:true,
            type:Object

        },
        QuizScore: {
            required:true,
            type:Number
        },
        QuizChoosenAnswer: {
            required:true,
            type:Object
        }
    },
    components: {

    },
    data(){
        return{
            showCorrect:Boolean,
            showFalse:Boolean,
           
      }
    },
    created(){
       this.showCorrect = false;
       this.showFalse = false;
        
    },
    methods: {

        showCorrectAnswers() {

            if(this.showCorrect) {
                this.showCorrect = false;
            }
            else {
                this.showCorrect = true;
            }    
            this.$forceUpdate();

        },
        showFalseAnswers() {

            if(this.showFalse) {
                this.showFalse = false;
            }
            else {
                this.showFalse = true;    
            }
           this.$forceUpdate();
        }
    }
}
</script>

<style scoped>

</style>