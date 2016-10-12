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
        
        $.ajax({
          url: 'http://foodservices.byuh.edu/food-services-jsonp-feed',
          dataType: 'jsonp',
          jsonp: 'jsoncallback',
          timeout: 5000,
          success: function(data, status) {
            $('.mainbody').empty();
            $.each(data.items, function(i,item) {
              var title = item.node.title;
            var BreakfastforFriday = item.node.BreakfastforFriday;
                var BreakfastforMonday = item.node.BreakfastforMonday;
            var BreakfastforSaturday = item.node.BreakfastforSaturday;
                var BreakfastforSunday = item.node.BreakfastforSunday;
            var BreakfastforThursday = item.node.BreakfastforThursday;
                var BreakfastforTuesday = item.node.BreakfastforTuesday;
            var BreakfastforWednesday = item.node.BreakfastforWednesday;
                var DateforFriday = item.node.DateforFriday;
                var DateforMonday = item.node.DateforMonday;
            var DateforSaturday = item.node.DateforSaturday;
                var DateforSunday = item.node.DateforSunday;
            var DateforThursday = item.node.DateforThursday;
                var DateforTuesday = item.node.DateforTuesday;
            var DateforWednesday = item.node.DateforWednesday;
                var DinnerforFriday = item.node.DinnerforFriday;
            var DinnerforMonday = item.node.DinnerforMonday;
                var DinnerforSaturday = item.node.DinnerforSaturday;
            var DinnerforSunday = item.node.DinnerforSunday;
                var DinnerforThursday = item.node.DinnerforThursday;
            var DinnerforTuesday = item.node.DinnerforTuesday;
                var DinnerforWednesday = item.node.DinnerforWednesday;
            var LunchforFriday = item.node.LunchforFriday;
                var LunchforMonday = item.node.LunchforMonday;
            var LunchforSaturday = item.node.LunchforSaturday;
                var LunchforSunday = item.node.LunchforSunday;
            var LunchforThursday = item.node.LunchforThursday;
                var LunchforTuesday = item.node.LunchforTuesday;
            var LunchforWednesday = item.node.LunchforWednesday;
                var MonFriTimeforBreakfast = item.node.MonFriTimeforBreakfast;
            var MonFriTimeforDinner = item.node.MonFriTimeforDinner;
                var MonFriTimeforLunch = item.node.MonFriTimeforLunch;
            var SatTimeforBreakfast = item.node.SatTimeforBreakfast;
                var SatTimeforDinner = item.node.SatTimeforDinner;
            var SatTimeforLunch = item.node.SatTimeforLunch;
                var SundayTimeforBreakfast = item.node.SundayTimeforBreakfast;
                var SundayTimeforDinner = item.node.SundayTimeforDinner;
                var SundayTimeforLunch = item.node.SundayTimeforLunch;
                var d = new Date();
                var weekday = new Array(7);
                weekday[0]=  "sunday";
                weekday[1] = "monday";
                weekday[2] = "tuesday";
                weekday[3] = "wednesday";
                weekday[4] = "thursday";
                weekday[5] = "friday";
                weekday[6] = "saturday";
                var n = weekday[d.getDay()];
                if(n === "sunday"){
                    $('.mainbody').append("<div class='container-fluid'><div class='row'><div class='col-xs-12 dinning-head' <center>" + DateforSunday+ "</center></div></div>");
                    $('.mainbody').append("<div class='row'>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'>"+ SundayTimeforBreakfast+"<br>"+ BreakfastforSunday +"</div>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'>"+ SundayTimeforLunch+"<br>"+ LunchforSunday +"</div>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'>"+ SundayTimeforDinner+"<br>"+ DinnerforSunday +"</div></div>");
                }
                if(n === "monday"){
                    $('.mainbody').append("<div class='container-fluid'><div class='row'><div class='col-xs-12 dinning-head' <center>" + DateforMonday+ "</center></div></div>");
                    $('.mainbody').append("<div class='row'>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'>"+ MonFriTimeforBreakfast+"<br>"+ BreakfastforMonday +"</div>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'>"+ MonFriTimeforLunch+"<br>"+ LunchforMonday +"</div>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'>"+ MonFriTimeforDinner+"<br>"+ DinnerforMonday +"</div></div>");
                }
                if(n === "tuesday"){
                    $('.mainbody').append("<div class='container-fluid'><div class='row'><div class='col-xs-12 dinning-head' <center>" + DateforTuesday+ "</center></div></div>");
                    $('.mainbody').append("<div class='row'>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'>"+ MonFriTimeforBreakfast+"<br>"+ BreakfastforTuesday +"</div>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'>"+ MonFriTimeforLunch+"<br>"+ LunchforTuesday +"</div>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'>"+ MonFriTimeforDinner+"<br>"+ DinnerforTuesday +"</div></div>");
                }
                if(n === "wednesday"){
                   $('.mainbody').append("<div class='container-fluid'><div class='row'><div class='col-xs-12 dinning-head' <center>" + DateforWednesday+ "</center></div></div>");
                    $('.mainbody').append("<div class='row'>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'><div class='meal-time'>Breakfast("+ MonFriTimeforBreakfast+")</div><div class='meals'>"+ BreakfastforWednesday +"</div></div>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'><div class='meal-time'>Lunch("+ MonFriTimeforLunch+")</div><div class='meals'>"+ LunchforWednesday +"</div></div>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'><div class='meal-time'>Dinner("+ MonFriTimeforDinner+")</div><div class='meals'>"+ DinnerforWednesday +"</div></div></div>");
                }
                if(n === "thursday"){
                   $('.mainbody').append("<div class='container-fluid'><div class='row'><div class='col-xs-12 dinning-head' <center>" + DateforThursday+ "</center></div></div>");
                    $('.mainbody').append("<div class='row'>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'><div class='meal-time'>Breakfast("+ MonFriTimeforBreakfast+")</div><div class='meals'>"+ BreakfastforThursday +"</div></div>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'><div class='meal-time'>Lunch("+ MonFriTimeforLunch+")</div><div class='meals'>"+ LunchforThursday +"</div></div>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'><div class='meal-time'>Dinner("+ MonFriTimeforDinner+")</div><div class='meals'>"+ DinnerforThursday +"</div></div></div>");
                }
                if(n === "friday"){
                    $('.mainbody').append("<div class='container-fluid'><div class='row'><div class='col-xs-12 dinning-head' <center>" + DateforFriday+ "</center></div></div>");
                    $('.mainbody').append("<div class='row'>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'><div class='meal-time'>Breakfast("+ MonFriTimeforBreakfast+")</div><div class='meals'>"+ BreakfastforFriday +"</div></div>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'><div class='meal-time'>Lunch("+ MonFriTimeforLunch+")</div><div class='meals'>"+ LunchforFriday +"</div></div>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'><div class='meal-time'>Dinner("+ MonFriTimeforDinner+")</div><div class='meals'>"+ DinnerforFriday +"</div></div></div>");
                }
                if(n === "saturday"){
                    $('.mainbody').append("<div class='container-fluid'><div class='row'><div class='col-xs-12 dinning-head' <center>" + DateforSaturday+ "</center></div></div>");
                    $('.mainbody').append("<div class='row'>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'>"+ SatTimeforBreakfast+"<br>"+ BreakfastforSaturday +"</div>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'>"+ SatTimeforLunch+"<br>"+ LunchforSaturday +"</div>");
                    $('.mainbody').append("<div class='col-lg-4 dinning-body'>"+ SatTimeforDinner+"<br>"+ DinnerforSaturday +"</div></div>");
                }
                

                
               
            });
          },
          error: function() {
            $('.mainbody').append('<li>There was an error loading the feed');
          }
        });
        
    }
};
