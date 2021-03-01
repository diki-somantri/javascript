Vue.component('comments',{
template:'#comment-template',
props:['comment'],
data:function(){
    return{
        plus:false,
        minus:false,
    }
    },
    methods:{
        tambah: function(){
        this.plus=!this.plus
        this.minus=false
        console.log("Plus : "+this.plus+" Minus : "+this.minus)
        },
        kurang: function(){
            this.minus=!this.minus
            this.plus=false
            console.log("Plus : "+this.plus+" Minus : "+this.minus)
        }
    },
    computed:{
        score:function(){
            if(this.plus)
                return this.comment.score+1
            else if (this.minus)
                return this.comment.score-1
            else
                return this.comment.score
            }
        }
})
let vn = new Vue({
    el:'#app',
    data:{
       comments:[
        {body:'komentar 1 komentar 1 komentar 1 ', time:'1-3-2020', score:0},
        {body:'komentar 2 komentar 2 komentar 2 ', time:'1-3-2020', score:5},
        {body:'komentar 3 komentar 3 komentar 3 ', time:'1-3-2020', score:5}
    ],comment_text:''  
    },
    methods:{
        postComment:function(){
            this.comments.push(
                {body:this.comment_text, time:'1-3-2020',score:0}
            )
            this.comment_text=''
        }
    }
});