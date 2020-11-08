module.exports = Vue.component('details',{

    component : require('./menu'),
    
    props : {
        
        id: {
           type: String,
           default: '10'
        } 
    },

    mounted: function() {
        // this.name = this.$root.name;
        this.getData(this.id)
    },
    
    template : `
    <div class="row">
        <customMenu></customMenu>
        <div class="col-md-12 content">
            <h2>Detalhes</h2>
            <div class="row">
                <div class="col-md-4">
                    <p><span>Paciente:</span><br>{{name}}</p>
                </div>
                <div class="col-md-4">
                    <p><span>Data da consulta:</span><br>{{dateAppointment}}</p>
                </div>
                <div class="col-md-4">
                    <p><span>Médico:</span><br>{{medic}}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p><span>Observações:</span><br>{{observes}}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <router-link to='/listMedicalAppointment'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/>
                        </svg>
                        Voltar
                    </router-link>
                </div>
            </div>
        </div>
    </div>`,

    data: function (){

        return{
            name : '',
            observes : '',
            medic : '',
            dateAppointment : ''
        }
    },

    methods: {

        getData:function(id){
            this.$root.requestDetails(id,this.successGetData,this.failGetData);
        },

        successGetData: function(response){
            this.setData(response.data);
        },

        failGetData : function(){
            console.error('falha ao tentar carregar detalhes da consulta');
        },

        setData : function(data){
            this.name = data.paciente;
            this.observes = data.observacao;
            this.medic = data.medico.nome;
            this.dateAppointment = data.dataConsulta;
        }
        


    }
})