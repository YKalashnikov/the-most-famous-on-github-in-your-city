module.exports = {
    presets: [
      'next/babel',
    ],
    env: {
      test: {
        presets: [['@babel/preset-env']]
      }
    },/* 
    module: {
      rules: [
        {
          test: /\.(png|jpg|svg|gif)$/,
          use: ['file-loader']
        },
      ]
    }, */
  }