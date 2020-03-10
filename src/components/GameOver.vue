<template>
    <div>
      <div class="gameover_header">
            <h1 class="gm_h1">Your game is over</h1>
            <br>
            <p>You scored: {{this.QuizScore}} </p>
      </div>
 
        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/jquerypost.appspot.com/o/untitled.png?alt=media&token=9fe964be-8335-4b21-9c6f-b0a69df29d32"
                img-alt="Image"
                img-top
                tag="article"
                
                class="mb-2">
                <br>
                <br>
            <div
              class="btn btn-outline-primary mx-3"
              @click="showCorrectAnswers"
              >Display Correct Answers
            </div>
            <div
              class="btn btn-outline-primary"
              @click="showFalseAnswers">
              Display Incorrect Answers         
            </div>
        </div>

       <div class="question_display">
            <div v-if="showCorrect">
                <div>
                    <p class="question_header">Questions you got correct</p>
                </div>
            <div>
                <tr v-for="(question, i) in CorrectQuiz" :key="i">
                    <td v-html="CorrectQuiz[i].question"></td>
                    <th>{{CorrectQuiz[i].correct_answer}}</th>
                </tr>
            </div>
        </div>
        <div v-if="showFalse">
            <div>
                <div>
                    <p class="question_header">Questions you got incorrect</p>
                </div>
            </div>
            <div>
                <tr v-for="(question, i) in IncorrectQuiz" :key="i">
                    <td v-html="IncorrectQuiz[i].question"></td>
                    <th>{{IncorrectQuiz[i].correct_answer}}</th>
                </tr>
            </div>
        </div>
       </div>
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

.question_header {
    margin: auto;
    margin-top: 20px;
    padding: 10px;
    font-size: 18px;
    font-family: fantasy;
}
.gm_h1 {
    font-family: fantasy;
    font-size: 26px;
}

</style>