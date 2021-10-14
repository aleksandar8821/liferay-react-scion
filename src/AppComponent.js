import React from 'react';
import ReactDOM from 'react-dom';
import {  MicrofrontendPlatform, OutletRouter, PlatformConfig } from '@scion/microfrontend-platform';
import { Beans } from '@scion/toolkit/bean-manager';

export default class extends React.Component {


	// constants = {
	// 	hostAppUrl: "http://localhost:4200",
	// 	headerAppUrl: "http://localhost:4201",
	// 	navbarAppUrl: "http://localhost:4202",
	// 	capitalAppUrl: "http://localhost:4203",
	// 	transactionAppUrl: "http://localhost:4204",
	// 	chartAppUrl: "http://localhost:4205",
	  
	// 	manifest: "/o/react-portlet-sample-data/json/manifest.json",
	// 	hostManifestRelativeURL: ""
	//   };

	//  platformConfig = [
	// 	{symbolicName: 'host-app', manifestUrl: `${constants.hostManifestRelativeURL}/${constants.manifest}`},
	// 	{symbolicName: 'header-app', manifestUrl: `${constants.headerAppUrl}/${constants.manifest}`},
	// 	{symbolicName: 'navbar-app', manifestUrl: `${constants.navbarAppUrl}/${constants.manifest}`},
	// 	{symbolicName: 'capital-app', manifestUrl: `${constants.capitalAppUrl}/${constants.manifest}`},
	// 	{symbolicName: 'chart-app', manifestUrl: `${constants.chartAppUrl}/${constants.manifest}`},
	// 	{symbolicName: 'transactions-app', manifestUrl: `${constants.transactionAppUrl}/${constants.manifest}`},
	//   ];



	  componentDidMount() {

		const constants = {
				hostAppUrl: "http://localhost:4200",
				headerAppUrl: "http://localhost:4201",
				navbarAppUrl: "http://localhost:4202",
				capitalAppUrl: "http://localhost:4203",
				transactionAppUrl: "http://localhost:4204",
				chartAppUrl: "http://localhost:4205",
			  
				manifest: "o/react-portlet-sample-data/json/manifest.json",
				hostManifestRelativeURL: ""
			  };

			 const 	 platformConfig = [
		{symbolicName: 'host-app', manifestUrl: `${constants.hostManifestRelativeURL}/${constants.manifest}`},
		// {symbolicName: 'header-app', manifestUrl: `${constants.headerAppUrl}/${constants.manifest}`},
		// {symbolicName: 'navbar-app', manifestUrl: `${constants.navbarAppUrl}/${constants.manifest}`},
		// {symbolicName: 'capital-app', manifestUrl: `${constants.capitalAppUrl}/${constants.manifest}`},
		// {symbolicName: 'chart-app', manifestUrl: `${constants.chartAppUrl}/${constants.manifest}`},
		// {symbolicName: 'transactions-app', manifestUrl: `${constants.transactionAppUrl}/${constants.manifest}`},
	  ];

		 async function init() {
			// Start the platform
			await MicrofrontendPlatform.startHost(platformConfig, {symbolicName: 'host-app'});
		
			Beans.get(OutletRouter).navigate(`http://localhost:4201/header-app.html`, {outlet: 'HEADER'});
		
			// Beans.get(OutletRouter).navigate(`${constants.navbarAppUrl}/navbar-app.html`, {outlet: 'NAVBAR'});
		
			// Beans.get(OutletRouter).navigate(`${constants.chartAppUrl}/index.html`, {outlet: 'MAIN-SCREEN-ASIDE'});
		
			// Beans.get(OutletRouter).navigate(`${constants.capitalAppUrl}/index.html`);
		  }

		  init();
		console.log('mounted');
	  }

	render() {
		return (
            <div>
				<div>
        	        <span className="tag">Portlet Namespace:</span> 
					<span className="value">{this.props.portletNamespace}</span>
				</div>
				<div>
    	            <span className="tag">Context Path:</span>
					<span className="value">{this.props.contextPath}</span>
				</div>
				<div>
	                <span className="tag">Portlet Element Id:</span>
					<span className="value">{this.props.portletElementId}</span>
				</div>
				
				<div>
					<span className="tag">Configuration:</span>
					<span className="value pre">{JSON.stringify(this.props.configuration, null, 2)}</span>
				</div>

				<sci-router-outlet name="HEADER"></sci-router-outlet>
				
			</div>
		);
	}	
}