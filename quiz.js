var app = new Vue({
    el:'#app',
    data(){
        return{
            users:[
            {
            'name' : 'Muhammad Iqbal Mubarok'
            },
            {
            'name' : 'Ruby Purwanti'
            },
            {
            'name' : 'Faqih Muhammad '
            }
        ],
        updateSubmit:false,
        form:{
            'name':''
        },
        selectedUserId:null,
        }
    },methods:{
        add(){
            this.users.push(
                this.form 
            )
             this.form={}
        },
        edit(user,index){
            this.selectedUserId=index
            this.updateSubmit=true
            this.form.name=user.name
        },
        update(){
            this.users[this.selectedUserId].name=this.form.name
            this.form={}
            this.updateSubmit=false
            this.selectedUserId=null
        },
        del(index){
        var r =confirm("Anda Yakin ?")
        if(r){
            this.users.splice(index,1)
        } 
        }
    }
      
    })