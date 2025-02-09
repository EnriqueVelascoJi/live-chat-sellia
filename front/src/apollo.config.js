// apollo.config.js
module.exports = {
    client: {
      service: {
        name: 'frontend',
        // URL to the GraphQL API
        url: 'http://localhost:4000/subscriptions',
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
      ],
    },
  }
  