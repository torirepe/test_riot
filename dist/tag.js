require('./tag/pages/index.tag');
require('./tag/pages/about.tag');
require('./tag/pages/contact.tag');
require('./tag/pages/404.tag');

/*route((url) => {
  url = url || 'index';
  console.log(url);
  riot.mount('content', url, { title: url });
})*/

const contents = "main";

route('/', () => {riot.mount(contents, 'index')})
route('/about', () => {riot.mount(contents, 'about')})
route('/contact', () => {riot.mount(contents, 'contact')})
route('/*', () => {riot.mount(contents, 'nopage')})

route.start(true) 

