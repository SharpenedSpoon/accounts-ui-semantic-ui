# accounts-ui-semantic-ui-select

Meteor accounts-ui(with the addition of 'select' as an input) adapted and styled to work with Semantic UI.

## Installation

With Meteor version 0.9.0 and above, run

	$ meteor add nisargkolhe:accounts-ui-semantic-ui-select

You will need Semantic UI installed and its JS loaded before this package runs. I haven't been happy with the Semantic UI packages already out there, so I'm doing this just by throwing all the CSS and JS files in my `/client/lib` folder.

This replaces/replicates the official `accounts-ui` package, so make sure to remove it if it's in your project.

## How to Use

Follow the documentation at [iandouglas:accounts-ui-semantic-ui](https://github.com/SharpenedSpoon/accounts-ui-semantic-ui) and [ian:accounts-ui-bootstrap-3](https://github.com/ianmartorell/meteor-accounts-ui-bootstrap-3). 

Here's an example to add a select dropdown list to the form:

	Accounts.ui.config({
		extraSignupFields: [
			{
		        fieldName: 'country',
		        fieldLabel: 'Classic HTML Select',
		        inputType: 'select',
		        showFieldLabel: true,
		        empty: 'Please select your country of residence',
		        data: [{
		            id: 1,
		            label: 'United States',
		            value: 'us'
		          }, {
		            id: 2,
		            label: 'Spain',
		            value: 'es',
		        }],
		        visible: true
		    },
			{
		        fieldName: 'gender',
		        fieldLabel: 'Semantic Style JS Select',
		        inputType: 'select',
		        showFieldLabel: true,
		        empty: 'Gender',
		        data: [{
		            id: 1,
		            label: 'Female',
		            value: 'female'
		          }, {
		            id: 2,
		            label: 'Male',
		            value: 'male',
		        }],
		        visible: true,
		        useJS: true
		    }
		]
	});

## Overview

I loved the Semantic UI implementation of accounts-ui by [iandouglas:accounts-ui-semantic-ui](https://github.com/SharpenedSpoon/accounts-ui-semantic-ui) but it was missing the select dropdown input. So I implemented select as an input as it is implemented at [ian:accounts-ui-bootstrap-3](https://github.com/ianmartorell/meteor-accounts-ui-bootstrap-3) but adapted to Semantic UI's style.