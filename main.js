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
            datavalue.forEach(function (data) {
                var strippedData = data;
            });
            console.log(datavalue[1]);
            $this.$data.output = datavalue.values;
            console.log($this.output);
            //loading fyrir appid
            $this.loading = false;
        });
    }
});
