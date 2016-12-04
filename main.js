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
    attached: function () {
        //Þetta virkar einhvernveginn
        var $this = this;
        var shipdata;
        
        $.getJSON("results.json", function (datavalue) {

            $.getJSON("results.json", function (ships) {
                shipdata = ships;
                datavalue.forEach(function (element, index, array) {
                    console.log(element);
                    shipdata.forEach(function (shipElement, shipIndex, shipArray) {
                        if (shipElement.typeId === element.victim.shipTypeID) {
                            element.victim.shipTypeID = shipElement.typeName;
                            return;
                        }
                    });
                });
        
                /*
        $.getJSON("results.json", function (datavalue) {
            datavalue.forEach(function (data) {
                var strippedData = data;
            });
            console.log(datavalue[1]);
            $this.$data.output = datavalue;
            console.log($this.output);
            //loading fyrir appid
            $this.loading = false;
        });
        */
        
    }
});