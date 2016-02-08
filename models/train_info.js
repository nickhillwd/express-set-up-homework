var trainInfo = {
  "services": [
    {
      "serviceID": 1,
      "origin": "EDB",
      "destination": "KGX",
      "callingAt": ["NCL", "NRD", "YRK"],
      "departTime": 1530,
      "arrivalTime": 2030,
      "ontime": false,
      "estimatedDeparture": 1555,
      "platform": 10
    },
    {
      "serviceID": 2,
      "origin": "EDB",
      "destination": "KGX",
      "callingAt": ["NCL", "NRD", "YRK"],
      "departTime": 1645,
      "arrivalTime": 2145,
      "ontime": true,
      "estimatedDeparture": null,
      "platform": 5
    },
    {
      "serviceID": 2,
      "origin": "EDB",
      "destination": "KGX",
      "callingAt": ["NCL", "NRD", "YRK"],
      "departTime": 1800,
      "arrivalTime": 2300,
      "ontime": true,
      "estimatedDeparture": null,
      "platform": 7
    }
  ]
}
module.exports = trainInfo;