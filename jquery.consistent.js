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
 	var Consistent = $.consistent = window.Consistent;

 	/**
 	 * Argument scenarios:
 	 * 1) $(...).consistent(): create a new scope, acquire the selected nodes and return the new scope
 	 * 2) $(...).consistent(aScope): acquire the selected nodes for the given scope and return the scope
 	 * 3) $(...).consistent(options): create a new scope with the given options, acquire the selected nodes and return the new scope.
 	 * 4) $(...).consistent(aScope, options): acquire the selected nodes for the given scope with the given options and return the scope.
 	 */
 	$.fn.consistent = function() {
 		var scope, options;
 		if (arguments.length === 0) {
 			/* Create a new default scope */
 			scope = Consistent();
 		} else {
 			var arg0 = arguments[0];
	 		if (Consistent.isScope(arg0)) {
	 			/* Scope and maybe options */
	 			scope = arg0;
	 			options = arguments.length > 1 ? arguments[1] : null;
	 		} else if (typeof arg0 === "object") {
	 			/* Options */
	 			scope = Consistent(arg0);
	 			options = null;
	 		} else {
	 			throw "First argument to $.consistent was not an appropriate type: " + typeof arg0;
	 		}
	 	}

		this.each(function() {
			scope.$.acquire(this, options);
		});

		scope.$.apply();

		return scope;
	};

 })(jQuery, window);
