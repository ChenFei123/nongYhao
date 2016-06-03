require('./lib/spa.min.js');
require('./views/guide.js');

require('./views/index.js');

// 配置视图的信息
var indexView = SPA.util.storage('isVisited') ? 'index' : 'guide';
SPA.config({
  indexView: indexView
});
