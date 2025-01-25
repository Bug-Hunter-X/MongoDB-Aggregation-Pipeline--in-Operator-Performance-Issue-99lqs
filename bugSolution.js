```javascript
//Efficient solution using $lookup and $unwind
db.collection.aggregate([
  {
    $lookup: {
      from: "lookupCollection",
      let: { ids: [1, 2, 3] },
      pipeline: [
        {
          $match: {
            $expr: { $in: [ "$_id", "$$ids"] }
          }
        }
      ],
      as: "matchedDocs"
    }
  },
  {
    $unwind: "$matchedDocs"
  }
])
```