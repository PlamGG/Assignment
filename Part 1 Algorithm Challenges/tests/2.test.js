const { approvePurchase } = require('../solutions/2');

describe('approvePurchase', () => {
  test('should approve purchase based on approvers\' limits', () => {
    const approvers = [
      { name: "Manager", limit: 5000 },
      { name: "Director", limit: 20000 },
      { name: "CEO", limit: 50000 },
    ];
    const purchaseAmount = 15000;

    const result = approvePurchase(approvers, purchaseAmount);

    expect(result).toEqual({
      approved: true,
      approver: "Director",
    });
  });
});
