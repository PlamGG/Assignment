function approvePurchase(approvers, purchaseAmount) {
    for (let approver of approvers) {
      if (purchaseAmount <= approver.limit) {
        return { approved: true, approver: approver.name };
      }
    }
    return { approved: false, approver: null };
  }
  
  module.exports = { approvePurchase };
  