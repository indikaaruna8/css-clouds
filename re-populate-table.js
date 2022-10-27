/* 
 * To change this license header, choose License Headers in Project Properties.
 * This is the jquery plugin for populate data
 * Created  By Indika Aruna
 */


(function ($) {
    $.fn.repopulate = function (options) {
        //pass tthe parameter
        var settings = $.extend({
            //initial data
            input_table: ""
        }, options)
        var $_html = "", input_table = settings.input_table;
        var $_head = $(input_table + " tr th");
        var $_data = $(input_table + " tr td")
        var length = $_head.length;
        var data_length=$_data.length;
        console.log(data_length);
        if (length > 0)
        {
            $_html = $(document.createElement('table'));

            for (var i = 0; i < length; i++)
            {
               var $_tr = $(document.createElement('tr'));
               var headhtmal=$($_head[i]).html();
               $(document.createElement('th')) .html(headhtmal).appendTo($_tr);
              
               for(j=i;j<data_length;j=j+length)
               {
                   console.log(j);
                   var data=$($_data[j]).html();
                   $(document.createElement('td')) .html(data).appendTo($_tr);
                   
               }
               $_html.append($_tr);
            }
        }
        console.log($_data);

        return this.append($_html); // return for Chaining
    };
}(jQuery)); // for jQuery.noConflict() 