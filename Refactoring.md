# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

created a catch for edge case where input is undefined
  this allows us to remove outer 'if' statements wrapping lines 10-17 and both the if/else statements wrapping lines 17-19
  and remove variable TRIVIAL_PARTITION_KEY = "0"

Changed the if statement that was above the return statement to a do while loop, and merged it with the originam running of the 'crypto.createHash' function to maintain DRY principles. 
This allows the function to always run once but in the case the hash is longer than the given max, it will rerun until we have a hash under max length

Removed the if statment to convert candidate to a string and included it in the return statement
  The added time complexity is negligable as it only adds a constant to the current O(n) complexity

created 3 additional tests for function
  1. checks that the partition key does not exceed length of 256
  2. always returns a value of type string
  3. If the event argument is given a key of 'partitionKey' then it still returns a value not equal to '0'