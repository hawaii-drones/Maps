/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false */
/* jshint strict: false, -W117 */


/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
//        var Jsonpitem = [];
//            var str1 = "item.node.";
//        for(var i =0 ; i < itemsOfJsonp; i++){
//            str1.concat(str1,itemsOfJsonp[i]);
//            Jsonpitem.push(str1);
//        }
//        console.log(Jsonpitem[0]);

        $.ajax({
          url: 'https://calendar.byuh.edu/?q=calendarjsonp&jsoncallback=jsoncallback',
          dataType: 'jsonp',
          jsonp: 'jsoncallback',
          jsonpCallback: 'jsoncallback',
          crossDomain: true,
          timeout: 5000,
          success: function(data, status) {
            $('.mainbody').empty();
            $.each(data.items, function(i,item) {
              var title = item.node.title;
              var time = item.node.field_date_time_value;
                var name = item.node.name;
                var contact = item.node.Contact;
                var sponsor = item.node.Sponsor;
                var event = item.node.Event;
                $('.mainbody').append('<p>' + title + "<br>");
                $('.mainbody').append(time+"<br>");
                $('.mainbody').append(name+"<br>");
                $('.mainbody').append(contact + "<br>");
                $('.mainbody').append(sponsor + "<br>");
                $('.mainbody').append(event + "</p>");

            });
          },
          error: function() {
            $('.mainbody').append('<li>There was an error loading the feed');
          }
        });
        
    }
};
