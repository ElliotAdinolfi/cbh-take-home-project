const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it('Returns a partition key of length less than 256', () => {
    const trivialKeyLength = deterministicPartitionKey('Known Individual').length;
    expect(trivialKeyLength).toBeLessThan(256);
  });

  it('Returns a partition key of type string', () => {
    const trivialKey = deterministicPartitionKey('Known Individual');
    expect(typeof trivialKey).toBe('string');
  });

  it('To return a non-zero value if a partition key is given on event object', () => {
    const event = {
      partitionKey: 'Random Assortment of Numbers and Letters 1235435234124245'
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).not.toBe('0');
  });

});
