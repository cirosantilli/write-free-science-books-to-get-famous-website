module.exports = {
  exits: {
    success: {
      viewTemplatePath: 'pages/account/account-overview',
    }
  },
  fn: async function () {
    return {
      stripePublishableKey: sails.config.custom.enableBillingFeatures? sails.config.custom.stripePublishableKey : undefined,
    };
  }
};
