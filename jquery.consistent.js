/*! 
 * Consistent.js jQuery plugin 0.1
 * @author Karl von Randow
 */
 /*!
    Copyright 2013 Karl von Randow

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
  */

 (function($, window, undefined) {
 	$.consistent = window.Consistent;

 	$.fn.consistent = function(scope, options) {
 		if (scope === undefined) {
 			throw "Scope is required as first argument to consistent";
 		}

		this.each(function() {
			scope.$.acquire(this, options);
		});

		scope.$.apply();

		return this;
	};

 })(jQuery, window);
