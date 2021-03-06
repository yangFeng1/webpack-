module.exports = {
  devtool:'eval-source-map',
  entry:__dirname+'/app/main.js',//唯一入口文件
  output:{
    path:__dirname+'/public',//打包后文件存放的位置
    filename:'bundle.js'
  },
  devServer:{
    contentBase:'./public',//本地服务器所加载的页面所在的目录
    historyApiFallback:true,//不跳转
    inline:true
  },
  module:{
    rules:[
      {
        test:/(\.jsx|\.js)$/,
        use:{
          loader:"babel-loader"
        },
        exclude:/node_module/
      },
      {
        test:/\.css$/,
        use:[
          {
            loader:"style-loader"
          },{
            loader:"css-loader",
            options:{
              modules:true
            }
          }
        ]
      }
    ]
  }
}
