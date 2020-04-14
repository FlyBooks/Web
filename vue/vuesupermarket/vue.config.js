module.exports = {
		configureWebpack: {
		  resolve: {
		  	alias: {
		  		'assets': 'src/assets/',
		  		'common': 'src/components/common/',
		  		'components': 'src/components/',
		  		'network': 'src/network/',
		  		'views': 'src/views/'
		  	}
		  },
		  devServer: {
		    host: '127.0.0.1',
		    port: 3000,
		  }
		},
		lintOnSave: false
}