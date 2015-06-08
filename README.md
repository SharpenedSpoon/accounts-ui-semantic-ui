# accounts-ui-semantic-ui

Meteor accounts-ui adapted and styled to work with Semantic UI.

## Installation

With Meteor version 0.9.0 and above, run
	
	$ meteor add iandouglas:accounts-ui-semantic-ui

You will need Semantic UI installed and its JS loaded before this package runs. I haven't been happy with the Semantic UI packages already out there, so I'm doing this just by throwing all the CSS and JS files in my `/client/lib` folder.

This replaces/replicates the official `accounts-ui` package, so make sure to remove it if it's in your project.

## How to Use

Just add `{{> loginButtons}}` to your template, as usual!

Since I based all the code off of the official Meteor package, then the usual `Accounts.ui` configurations will work. I added one additional configuration option, however, which is `dropdownClasses`. That is, you can add the following to your config, along with any other options you might want:

	Accounts.ui.config({
		dropdownClasses: 'simple'
	});

The classes you specify will be added to the main `.ui.dropdown.item` element - I use this mostly to add a `simple` class to my dropdowns, but you might use it for any other classes. Note that I tried to make it somewhat intelligent, so that if the dropdown has the `simple` class, then it will not be initialized with `$('.dropdown').dropdown()`.

## Custom Signup Fields

One of my favorite features from [ian:accounts-ui-bootstrap-3]<https://github.com/ianmartorell/meteor-accounts-ui-bootstrap-3> is the ease with which you can add extra signup fields. I have implemented (nearly verbatim) his code for doing so, and so to add extra signup fields, you can pretty much just reference [his documentation]<https://github.com/ianmartorell/meteor-accounts-ui-bootstrap-3#custom-signup-options>.

There is one small difference, however. Since Semantic UI supports a couple different [checkbox types]<http://semantic-ui.com/modules/checkbox.html>, I have added a couple fields to support this. Also, I feel like he didn't completely document his validation method, which is pretty slick! All that being said, it's probably worthwhile to show his example with the extra tweaks:

	Accounts.ui.config({
		extraSignupFields: [
			{
				fieldName: 'first-name',
				fieldLabel: 'First name',
				inputType: 'text',
				visible: true,
				saveToProfile: true,
				validate: function(value, errorFunction) {
					if (value.trim() == '') {
						errorFunction('First name cannot be blank');
						return false;
					} else {
						return true;
					}
				}
			},
			{
				fieldName: 'last-name',
				fieldLabel: 'Last name',
				inputType: 'text',
				visible: true,
				saveToProfile: true
			},
			{
				fieldName: 'checkbox',
				fieldLabel: 'Default checkbox with no JS',
				inputType: 'checkbox',
				visible: true,
				saveToProfile: false
			},
			{
				fieldName: 'checkbox-js',
				fieldLabel: 'Default checkbox with JS',
				inputType: 'checkbox',
				visible: true,
				saveToProfile: false,
				useJS: true
			},
			{
				fieldName: 'checkbox-slider-js',
				fieldLabel: 'Slider checkbox with JS',
				inputType: 'checkbox',
				visible: true,
				saveToProfile: false,
				fieldClasses: 'slider',
				useJS: true
			},
			{
				fieldName: 'checkbox-toggle-js',
				fieldLabel: 'Toggle checkbox with JS',
				inputType: 'checkbox',
				visible: true,
				saveToProfile: false,
				fieldClasses: 'toggle',
				useJS: true
			},
		]
	});

## Overview

I am a relative newcomer to the Semantic UI framework, and could not find an implementation of accounts-ui using Semantic UI classes/markup, so I decided to try and put together my own. Overall I am very happy with this initial release - but I'm sure there are improvements that can be made, and I welcome pull requests or comments.

Mostly, I just really wanted to be able to use the excellent accounts-ui and have it play nicely with all my other Semantic UI elements.

## Semantic UI Usage

This package is mainly based around the dropdown component. I have done my best to make everything pretty within that dropdown, but honestly have found some of the default behavior styling to be somewhat lackluster/rigid, and hence some markup is abused and I included just a couple minor (but shameful) inline styles, to clean things up.

The components used are (in order of "importance"/frequency):

* [Dropdown](http://semantic-ui.com/modules/dropdown.html) (CSS and JS)
* [Modal](http://semantic-ui.com/modules/modal.html) (CSS and JS)
* [Menu](http://semantic-ui.com/collections/menu.html) (CSS)
* [Form](http://semantic-ui.com/collections/form.html) (CSS)
* [Button](http://semantic-ui.com/elements/button.html) (CSS)
* [Divider](http://semantic-ui.com/elements/divider.html) (CSS)
* [Loader](http://semantic-ui.com/elements/loader.html) (CSS)

## Changelog

### Version 1.0.3 (2015-03-26)
* Added `extraSignupFields` option

### Version 1.0.2 (2015-03-23)
* Initial version released to atmosphere