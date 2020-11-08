var axios = require('axios');
module.exports = {

    methods : {

        resquestLogin : function(data,callback){

            var self = this;
            self.$http.post('http://desafio.conexasaude.com.br/api/login',data).then(function(response){

                
                if(response.status == 200){
                    self.updateData(response.body.data);
                    self.$router.push({path: "home" });
                }else{
                    callback();
                }

            })


        },

        resquestEnroll : function(data,callbackSuccess,callbackFail){


            var token  = this.token;
           
            axios.request({

                baseURL:'http://desafio.conexasaude.com.br/api/consulta',
                method: 'post',
                data : data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'content-type': 'application/json;charset=UTF-8'
                }

            }).then(response => {

                if(response.status == 200 || response.status == 201){
                    callbackSuccess(response.data);
                }else{
                    callbackFail();
                }

            });

        }


    }

}