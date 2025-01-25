# MongoDB Aggregation Pipeline $in Operator Performance Issue
This repository demonstrates a common performance issue encountered when using the $in operator within MongoDB aggregation pipelines, specifically with large arrays.  The problem lies in the inefficient handling of large input arrays by the $in operator, which can lead to significant performance degradation and potential query timeouts.

The `bug.js` file illustrates the incorrect usage, while `bugSolution.js` offers a more efficient alternative using $lookup and $unwind to handle large arrays in aggregation pipelines.

## How to Reproduce
1. Clone the repository.
2. Install MongoDB.
3. Populate a MongoDB collection with sufficient data (adjust the size for demonstration purposes).
4. Run `bug.js` to observe the performance issue. 
5. Run `bugSolution.js` to see the improved performance using the provided solution.
