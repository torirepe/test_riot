require('../tag/app.tag')
require('../tag/menu.tag')
require('../tag/home.tag')
require('../tag/about.tag')
require('../tag/contact.tag')

document.body.appendChild(document.createElement('app'))
riot.mount('app')

// routes
import route from 'riot-route'

route('/', () => riot.mount('main', 'home'))
route('/about', () => riot.mount('main', 'about'))
route('/contact', () => riot.mount('main', 'contact'))

route.start(true) // trueを渡さないと初回読み込み時にルーティングイベントが発火しない