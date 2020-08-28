# Sogeti coding exercise

## To run
```
npm run start
```
## To run in watch mode
```
npm run start:watch
```

## V1 Test Sample
### Input
```
curl -H "Content-Type: application/json" -X POST -d '{"data": "JOHN0000MICHAEL0009994567"}' http://localhost:4000/api/v1/parse
```
### Output
```
{"firstName":"JOHN0000","lastName":"MICHAEL000","clientId":"9994567"}
```

## V2 Test Sample
### Input
```
curl -H "Content-Type: application/json" -X POST -d '{"data": "JOHN0000MICHAEL0009994567"}' http://localhost:4000/api/v2/parse
```
### Output
```
{"firstName":"JOHN","lastName":"MICHAEL","clientId":"9994567"}
```
