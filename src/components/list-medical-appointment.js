module.exports =  Vue.component('list-medical-appointment', {
    
    component : require('./menu'),

    template : `
    <div class="row">
        <customMenu></customMenu>
        <div class="col-md-12 content">
            <h2>Lista de consultas</h2>
            <div>
                <table class="table table-striped">
                    <thead class="thead-dark">
                    <tr>
                        <th scope="col">Paciente</th>
                        <th scope="col">Data da Consulta</th>
                        <th scope="col">Observação</th>
                        <th scope="col"> </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in list">
                        <td>{{item.paciente}}</td>
                        <td>{{item.dataConsulta}}</td>
                        <td>{{item.observacao}}</td>
                        <td><a href="#" v-on:click.prevent="showDetails(item.id)">Detalhes</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>        
        </div>
    </div>`,

    data : function(){
        
        return {

            list: []

        }

    },

    mounted : function(){
        this.callRequestList()
    },

    methods : {

        callRequestList : function(){

            this.$root.resquestList(this.requestListSuccess,this.requestListFail)

        },

        requestListSuccess : function(list){

            this.list = list.data;

        },

        requestListFail : function(){

            console.error('Não foi possível carregar a lista.')

        },

        showDetails : function(id){

            // this.$root.requestDetails(id);
            this.$router.push({name: "details", params : { id: id } });

        }

    }

})