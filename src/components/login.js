module.exports = Vue.component('login',{
    template : `
    <div class="row">
        <div class='col-md-4'></div>
        <div class='col-md-4 container-login'>
            <div>
            
                <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="136" height="26" viewBox="0 0 136 26">
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#3CB4E7" d="M24.86 25.146c-4.519 0-8.195-3.575-8.195-7.969s3.676-7.97 8.195-7.97c4.518 0 8.194 3.576 8.194 7.97s-3.676 7.97-8.194 7.97zm0-12.59c-2.62 0-4.751 2.074-4.751 4.621 0 2.547 2.132 4.62 4.75 4.62 2.622 0 4.752-2.073 4.752-4.62s-2.132-4.62-4.751-4.62zM8.195 25.146C3.676 25.146 0 21.571 0 17.177s3.676-7.97 8.195-7.97c2.478 0 4.798 1.076 6.363 2.95.6.72.488 1.774-.25 2.356a1.755 1.755 0 0 1-2.422-.244 4.787 4.787 0 0 0-3.69-1.711c-2.62 0-4.751 2.073-4.751 4.62 0 2.548 2.131 4.62 4.75 4.62a4.79 4.79 0 0 0 3.691-1.71 1.754 1.754 0 0 1 2.421-.245c.739.583.85 1.638.251 2.356-1.565 1.872-3.885 2.947-6.363 2.947zM42.97 9.208c-4.518 0-8.194 3.575-8.194 7.969v6.295c0 .924.771 1.674 1.722 1.674.95 0 1.721-.749 1.721-1.674v-6.295c0-2.547 2.132-4.62 4.751-4.62 2.62 0 4.751 2.073 4.751 4.62v6.295c0 .924.772 1.674 1.722 1.674.952 0 1.722-.749 1.722-1.674v-6.295c0-4.394-3.676-7.97-8.195-7.97zM100.846 9.208c-.887 0-1.617.652-1.712 1.49a8.302 8.302 0 0 0-4.762-1.49c-4.52 0-8.195 3.575-8.195 7.969s3.676 7.97 8.195 7.97c1.775 0 3.42-.554 4.762-1.491.095.838.825 1.49 1.712 1.49.95 0 1.721-.749 1.721-1.674v-12.59c0-.925-.771-1.674-1.721-1.674zm-6.473 12.59c-2.62 0-4.751-2.074-4.751-4.621 0-2.547 2.131-4.62 4.75-4.62 2.62 0 4.752 2.073 4.752 4.62 0 2.549-2.132 4.62-4.751 4.62zM79.912 17.177l4.18-5.2a1.643 1.643 0 0 0-.296-2.351 1.754 1.754 0 0 0-2.417.287l-3.653 4.544-3.652-4.544a1.753 1.753 0 0 0-2.416-.287 1.643 1.643 0 0 0-.295 2.35l4.18 5.201-4.18 5.2a1.645 1.645 0 0 0 .295 2.351c.314.24.69.356 1.06.356.51 0 1.018-.221 1.357-.643l3.653-4.544 3.652 4.544c.34.423.845.643 1.358.643.37 0 .744-.117 1.059-.356.75-.568.882-1.622.296-2.35l-4.181-5.201zM61.08 9.208c-4.518 0-8.194 3.575-8.194 7.969s3.676 7.97 8.195 7.97h4.098c.95 0 1.721-.751 1.721-1.675s-.771-1.674-1.721-1.674H61.08c-2.012 0-3.735-1.225-4.427-2.947h10.9c.95 0 1.721-.749 1.721-1.674-.001-4.394-3.676-7.97-8.194-7.97zm-4.428 6.295c.69-1.723 2.415-2.946 4.429-2.946 2.013 0 3.738 1.223 4.429 2.946h-8.858zM113.812 24.126s.002 0 0 0c-.002-.016-.009-.032-.013-.048a.128.128 0 0 1-.005-.022c-.408-1.562-1.67-2.791-3.275-3.191-.021-.007-.044-.012-.065-.018a.886.886 0 0 0-.202-.025.849.849 0 0 0-.861.838v1.81c0 .925.77 1.675 1.722 1.675h1.86c.476 0 .861-.374.861-.837a.762.762 0 0 0-.022-.182z"/>
                            <path fill="#EF4056" d="M133.526 7.551h-6.043V1.674c0-.924-.77-1.674-1.721-1.674h-6.886c-.95 0-1.722.749-1.722 1.674v5.877h-6.043c-.95 0-1.722.75-1.722 1.675v2.58c0 .444.357.807.805.835v.001c6.474.389 11.654 5.426 12.053 11.722h.003a.85.85 0 0 0 .858.782h2.654c.95 0 1.721-.749 1.721-1.674v-5.877h6.043c.95 0 1.722-.749 1.722-1.674V9.224c0-.924-.771-1.673-1.722-1.673z"/>
                            <path fill="#3CB4E7" d="M119.456 24.222v-.005c-.45-4.684-4.28-8.413-9.094-8.859l-.037-.004c-.005 0-.01 0-.017-.002l-.004.001a.849.849 0 0 0-.913.835v1.025c0 .432.336.787.767.832l.003.001c3.433.35 6.163 2.999 6.528 6.336a.85.85 0 0 0 .857.763h1.054c.476 0 .86-.374.86-.837 0-.028-.002-.056-.004-.086z"/>
                        </g>
                    </svg>
                </h1>
                <form>
                    <div class="form-group form-login">
                        <fieldset>
                            <legend>Área de login</legend>
                            <label for="input-login">Login<span class="required"></span>:</label>
                            <input :class="{'errorField': submit && !validation.email}" type="text" id="input-login" name="input-login" class="form-control" placeholder="Ex: conexa@conexasaude.com.br" v-model="form.email"/>
                            <span class="error" v-if="submit && !validation.email">Preenhcer com um e-mail válido.</span>
                            <br>
                            <br>
                            <label for="input-password" >Senha<span class="required"></span>:</label>
                            <input :class="{'errorField': submit && !validation.password}"  type="password" id="input-password" name="input-password" class="form-control"  v-model="form.password"/>
                            <span class="error" v-if="submit && !validation.password">Preenhcer com uma senha válida.</span>
                            <br>
                            <br>
                            <p>Itens com * são obrigatórios</p>
                            <input type="submit" class="btn btn-primary"  value="Enviar" v-on:click.prevent="login"/> 
                            <br>
                            <div class="alert alert-danger" role="alert" v-if="error">
                                Não foi possível realizar o login
                            </div>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
        <div class='col-md-4'></div>
    </div>
    `,

    mixins: [require('../mixins/form-ultis')],

    data : function(){
        return{
            form : {
                password : '',
                email : '',
            },
            error : false,
            submit : false,
        }
    },

    computed : {

        validation : function(){
            return {
                email : !!this.form.email.trim(),
                password : !!this.form.password.trim()
            }
        }
    },


    methods : {

        login : function(){
            
            this.submit = true;
            if(this.isValid){
                               
                const obj = JSON.stringify(this.form);
                this.$root.resquestLogin(obj,this.showErrorLogin);
            }

        },

        showErrorLogin: function(){
            this.error = true
        }
    }
})