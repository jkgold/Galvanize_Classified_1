// Update with your config settings.

module.exports = {

  development: {
    client:"pg",
    connection:"postgress://localhost/classifieds_dev"
  },
  test: {
     client:"pg",
     connection: 'postgress://localhost/classifieds_test'
   },
  production: { },

};
