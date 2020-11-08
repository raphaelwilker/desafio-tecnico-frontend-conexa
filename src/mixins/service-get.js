var axios = require('axios');
module.exports = {

    methods : {

        resquestList : function(callbackSuccess, callbackFail){

            var token  = this.token;
           
            axios.request({

                baseURL:'http://desafio.conexasaude.com.br/api/consultas',
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            }).then(response => {

                if(response.status == 200){
                    callbackSuccess(response.data);
                }else{
                    callbackFail();
                }

            });
                        

        },

        requestDetails : function(id,callbackSuccess,callbackFail){

            var token  = this.token;
           
            axios.request({

                baseURL:'http://desafio.conexasaude.com.br/api/consulta/'+id,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            }).then(response => {

                if(response.status == 200){
                    console.log(response.data);
                    callbackSuccess(response.data);
                }else{
                    console.error('Houve um erro na chamada dos detalhes');
                    // callbackFail();
                }

            });

        }


    }

}