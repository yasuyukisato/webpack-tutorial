module.exports = {
  // エントリーポイント → バンドルするファイルの指定
  entry: "./src/index.js",

  // ファイルの出力設定　→
  output: {
    // 出力先のパスを設定 __dirnameはwebpack-tutorialディレクトリを指す
    path: `${__dirname}/dist`,
    // 出力するファイル名
    filename: "bundle.js",
  },
  mode: "development",
  // mode: "productionn"

  // ローカルサーバーの設定
  devServer: {
    // 起動するファイル
    static: "dist",
    open: true,
  },
}
