const { default: VueRouter } = require('vue-router');

require('./sass/index.sass');

define([],function(){
    'use strict';

    Vue.use(VueResource);
    Vue.use(VueRouter);

    Vue.http.options.emulateJSON = true;
    Vue.http.options.emulateHTTP = true;

    const components = [
        require('./components/login'),
    ]

    const mixins = [
        require('./mixins/data'),
        require('./mixins/service-post'),
        require('./mixins/service-get'),
    ]

    const routes = require('./routes/router')

    const router = new VueRouter({
        routes
    })

    new Vue({
        el: '#app',
        mixins : mixins,
        components : components,
        router : router
    })
})