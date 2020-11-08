module.exports  = {

    data : function(){

        return {
            
            token : '',
            name : '',
            email : ''

        }

    },

    methods : {


        updateData : function(data){
            this.name = data.nome;
            this.token = data.token;
            this.email = data.email;
        }

    }
}