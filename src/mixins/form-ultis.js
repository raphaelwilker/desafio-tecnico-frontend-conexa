module.exports = {

    computed : {
        
        isValid : function () {

            var self       = this;
            var validation = self.validation;

            if ( typeof self.validation === 'object' ) {

                return Object.keys(validation).every(function (key) {
                    return validation[key]
                });
            }
        },
    },


    mounted : function () {
        var self = this;
        /* FOCUS FIRST FIELD */
        if ( self.$el.localName !== undefined ) {
            if ( self.$el.querySelector('input') !== null && !self.$el.querySelector('input').dataset.hasOwnProperty('autofocus') ) {
                self.$el.querySelector('input').focus();    
            }   
        }
    },

}