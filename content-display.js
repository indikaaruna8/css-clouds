/* 
 * To change this license header, choose License Headers in Project Properties.
 * This is the jquery plugin for populate data
 * Created  By Indika Aruna
 */


(function ($) {
    $.fn.populate = function (options) {
        //pass tthe parameter
        var settings = $.extend({
            //initial data
            data: {}
        }, options)
        var $_html = "",
                index,
                data = settings.data;

        var length = data.length;

        if (length > 0)
        {
            var $_html = $(document.createElement('ul')); // fastest method 
            //other method 
            //var $_html= $("<ul>")
            var data_row;
            for (index = 0; index < length; index++)
            {
                data_row = data[index];
                $(document.createElement('li')).attr({id: data_row.id}).html(data_row.name).css("color", data_row.color).appendTo($_html);
                // 
                // other methods
                //$("<li>").attr({id:data_row.id}).html(data_row.name).css("color",data_row.color).appendTo($_html);
                //$($_html).append('<li id="'+data_row.id+'" style="color:'+data_row.color+'">'+data_row.name+'</li>');

            }
        }
        return this.html($_html); // return for Chaining
    };
}(jQuery)); // for jQuery.noConflict() 