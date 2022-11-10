const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {

  if(event === undefined) return '0';

  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event.partitionKey) {
    candidate = event.partitionKey;
  } else {
    const data = JSON.stringify(event);
    do {
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    } while (candidate.length > MAX_PARTITION_KEY_LENGTH)
  }

  return JSON.stringify(candidate);
};