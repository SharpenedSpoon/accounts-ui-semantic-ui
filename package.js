Package.describe({
  name: 'iandouglas:accounts-ui-semantic-ui',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.1');
  api.addFiles('accounts-ui-semantic-ui.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('iandouglas:accounts-ui-semantic-ui');
  api.addFiles('accounts-ui-semantic-ui-tests.js');
});
