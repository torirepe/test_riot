require('./tag/pages/index.tag');
require('./tag/pages/about.tag');
require('./tag/pages/concept.tag');
require('./tag/pages/404.tag');

/*route((url) => {
  url = url || 'index';
  console.log(url);
  riot.mount('content', url, { title: url });
})*/

route('/', () => {riot.mount('contents', 'index')})
route('/about', () => {riot.mount('contents', 'about')})
route('/concept', () => {riot.mount('contents', 'concept')})
route('/*', () => {riot.mount('contents', 'nopage')})

route.start(true) 

