
import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './AppComponent';

// import './polyfills'

import 'react-app-polyfill/ie11';
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/number/is-nan';

import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';


/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent 
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
export default function main({portletNamespace, contextPath, portletElementId, configuration}) {
    
    ReactDOM.render(
        <AppComponent 
            portletNamespace={portletNamespace} 
            contextPath={contextPath}
            portletElementId={portletElementId}
            
            configuration={configuration}
            
            />, 
        document.getElementById(portletElementId)
    );
    
}