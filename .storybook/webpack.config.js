// const path = require('path');

// module.exports = async ({ config }) => {
//   // fonts
//   config.module.rules.push({
//     test: /\.(png|woff|woff2|eot|ttf|svg)$/,
//     use: [
//       {
//         loader: 'file-loader',
//         query: {
//           name: '[name].[ext]'
//         }
//       }
//     ],
//     include: path.resolve(__dirname, '../src/fonts/')
//   });
//   // styles
//   /* config.module.rules.push({
//     test: /\.(sass|scss)$/,
//     use: ['resolve-url-loader'],
//     include: path.resolve(__dirname, '../src/')
//   }); */
//   config.resolve = {
//     ...config.resolve,
//     alias: {
//       ...config.alias,
//       '@': path.resolve(__dirname, '../src/'),
//       Mixins: path.resolve(__dirname, '../src/scss/mixins')
//     }
//   }

//   return config;
// };
