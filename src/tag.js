require('./tag/app.tag');

route((url) => {
  console.log(url);
})
route.start();
riot.mount('app', { title: 'hogehoge' });

