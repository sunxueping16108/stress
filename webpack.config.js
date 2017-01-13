var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	//ҳ������ļ�����
	entry: {
		index : './public/js/index.js'
	},
	//����ļ��������
	/*output: {
		path: 'dist/js/page',
		filename: '[name].js'
	},*/
	module: {
		//����������
		loaders: [
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.js$/, loader: 'jsx-loader?harmony' },
			{ test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
		]
	}
};
