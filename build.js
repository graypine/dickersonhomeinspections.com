const Metalsmith = require('metalsmith')
const less = require('metalsmith-lesser')
const markdown = require('metalsmith-markdown')
const serve = require('metalsmith-serve')

Metalsmith(__dirname)
  .clean(true)
  .use(less({
    copySource: false,
    lessOptions: {
      plugins: []
    }
  }))
  .build((err) => {
    if (err) throw err
    console.log('build finished')
  })
