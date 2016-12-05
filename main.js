/*jslint node: true */
/*jslint browser: true*/
/*global $, jQuery, alert*/
"use strict";
Vue.config.debug = true;

new Vue({
    el: '#app',
    data: {
        loading : true,
        output: {}
    },
    created: function () {
        //Þetta virkar einhvernveginn
        var $this = this,
            shipdata;
        
        $.getJSON("results.json", function (datavalue) {
            console.log(datavalue);
            $this.$data.output = datavalue.values;
            console.log($this.output);
            //loading fyrir appid
            $this.loading = false;
        });
    }
});
