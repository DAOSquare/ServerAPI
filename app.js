/**
 * 描述: 程序入口文件
 * 作者: Benjamin
 * 日期: 2021-08-30
*/

const bodyParser = require('body-parser'); // 引入body-parser模块
const cookieParser = require('cookie-parser'); // 引入cookie-parser模块，用于客户端操作cookie
const express = require('express'); // 引入express模块
const path = require('path'); // 引入path模块，处理文件路径小工具
const cors = require('cors'); // 引入cors模块，用于解决跨越
const routes = require('./routes'); //导入自定义路由文件，创建模块化路由
const session = require('express-session'); // 引入express-session模块，用于服务器端操作session
const app = express();

const port = process.env.PORT || 3000;

// app.use('/static', express.static(path.join(__dirname, 'public'))); // 静态资源
app.use(bodyParser.json()); // 解析json数据格式
app.use(bodyParser.urlencoded({extended: true})); // 解析form表单提交的数据application/x-www-form-urlencoded

app.use(cookieParser());
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: ('name', 'value', {maxAge:  5 * 60 * 1000, secure: false})
}));

app.use(cors()); // 注入cors模块解决跨域

// 设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['get', 'post', 'put', 'delete'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
)

app.use('/', routes);


app.listen(port, () => { // 监听3000端口
	console.log('服务已启动 http://localhost:3000');
})