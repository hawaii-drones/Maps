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
    initialize: function(id) {
        $.ajax({
          url: 'https://newsroom.byuh.edu/jsonpnewsfeed',
          dataType: 'jsonp',
          jsonp: 'jsoncallback',
          timeout: 5000,
          success: function(data, status) {
            $('.newsroom').empty();
            $.each(data.items, function(i,item) {
              var title = item.node.headline;
              var img = item.node.imagepath.src;

              $('.mainbody').append("<div class='container-fluid'><div class='row'><div class='col-xs-12'>"+title + '<br></div>');
             $('.mainbody').append("<div class='row'><div class='col-xs-12'><img style='width=100%' src="+img+"/> </div></div></div>");
            });
          },
          error: function() {
            $('.mainbody').append('<li>There was an error loading the feed');
          }
        });
       
    }
};
