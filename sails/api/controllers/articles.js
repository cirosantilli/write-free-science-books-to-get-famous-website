module.exports = {
  exits: {
    success: {
      viewTemplatePath: 'pages/articles.ejs',
    }
  },
  fn: async () => {
    return {
      articles: await Article.find(),
    };
  }
};
