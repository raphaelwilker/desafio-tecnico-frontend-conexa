module.exports = Vue.component('enroll',{

    component : require('./menu'),
    mixins: [ require('../mixins/form-ultis')],
    template : `
    <div class="row">
        <customMenu></customMenu>
        <div class="col-md-12 content">
            <h2>Cadastrar consulta</h2>
            <div class="form-group">
                <form>
                    <fieldset>
                        <legend>Dados</legend>
                        <div  class="form-group">
                            <div class="alert alert-success" role="alert" v-if="success">
                                Cadastro realizado com sucesso
                            </div>
                            <div class="alert alert-danger" role="alert"  v-if="error">
                                Ocorreu um erro durante a gravação de dados
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="input-paciente">Paciente<span class="required"></span>:</label>
                            <input :class="{'errorField': submit && !validation.paciente}" type="text" id="input-paciente" name="input-paciente" class="form-control" placeholder="Nome do paciente" v-model="form.paciente"/>
                            <span class="error" v-if="submit && !validation.paciente">Preenhcer com o nome do paciente.</span>
                        </div>
                        <div class="form-group">
                            <label for="input-datetime">Data da consulta<span class="required"></span>:</label>
                            <input  :class="{'errorField': submit && !validation.dataConsulta}" type="datetime-local" id="input-datetime" name="input-password" class="form-control"  v-model="form.dataConsulta"/>
                            <span class="error" v-if="submit && !validation.dataConsulta">Preenhcer com a data e hora da consulta.</span>
                        </div>
                        <div class="form-group">
                            <label for="input-observe">Observação<span class="required"></span>:</label>
                            <textarea :class="{'errorField': submit && !validation.observacao}" id="input-observe"  class="form-control" rows="3" placeholder="Preencher com alguma observação..." name="input-observe" v-model="form.observacao"></textarea>
                            <span class="error" v-if="submit && !validation.observacao">Preenhcer com alguma observação.</span>
                        </div>
                        <div class="form-group">
                            <p>Itens com * são obrigatórios</p>
                            <button class="btn btn-danger" v-on:click.prevent="resetFields">Cancelar</button>
                            <input type="submit" class="btn btn-primary"  value="Gravar" v-on:click.prevent="enroll"/> 
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
    `,

    data : function(){

        return {
  
            form : {
                paciente : '',
                dataConsulta : '',
                observacao : '',
                idMedico : 1
            },

            submit : false,
            error : false,
            success : false,

        }
    },

    computed : {

        validation : function(){
            return {
                paciente : !!this.form.paciente.trim(),
                dataConsulta : !!this.form.dataConsulta.trim(),
                observacao : !!this.form.observacao.trim(),
            }
        }
    },

    methods : {

        resetFields : function(){
            for(var i in this.form){
                this.form[i] =  i == "idMedico" ? 1 :  ''
            }
            this.submit = false;
        },

        enroll : function(){

            this.submit = true;
            if(this.isValid){

                const obj = JSON.stringify(this.form);
                this.$root.resquestEnroll(obj,this.successEnroll,this.failEnroll);

            }

        },

        successEnroll : function(){
            var self = this;
           
            self.success = true;
            self.resetFields();
            setTimeout(function(){
                self.success = false;
            },5000)
        },

        failEnroll : function(){
            this.error = true
            console.error('Erro ao tentar cadastrar');
        }



        

    }
})