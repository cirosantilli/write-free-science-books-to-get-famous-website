module.exports = {
  exits: {
    success: {
      viewTemplatePath: 'pages/users.ejs',
    }
  },
  fn: async () => {
    return {
      users: await User.find(),
    };
  }
};
