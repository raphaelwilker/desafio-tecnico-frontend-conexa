module.exports = Vue.component('home',{

    component : require('./menu'),
    
    props : {
        name: String
    },

    mounted: function() {
        this.name = this.$root.name;
    },
    
    template : `
        <div class="row">
            <customMenu></customMenu>
            <div class="col-md-12 content">
                <h2>Bem vindo: {{name}} </h2>
            </div>
        </div>
    `,

})