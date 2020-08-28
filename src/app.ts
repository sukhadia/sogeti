import express, { Application, Request, Response, NextFunction } from "express"
import bodyParser from "body-parser"

const PORT = 4000
const FIRST_DELIMITER = '0000'
const SECOND_DELIMITER = '000'

const app: Application = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", (req: Request, res: Response) => {
  res.send("TS App is Running")
})
app.post("/api/v1/parse", (req: Request, res: Response) => {
  const input: ToParse = req.body
  console.log('Received (v1): ', input)
  res.json(parseV1(input))
  res.end()
})
app.post("/api/v2/parse", (req: Request, res: Response) => {
  const input: ToParse = req.body
  console.log('Received (v2): ', input)
  res.json(parseV2(input))
  res.end()
})

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`)
})

const parseV1 = (input: ToParse) => {
  return parse(input, true)
}

const parseV2 = (input: ToParse) => {
  return parse(input)
}

const parse = (input: ToParse, isIncludeDelimiter = false) => {
  const firstSplit = input.data.split(FIRST_DELIMITER)
  const secondSplit = firstSplit[1].split(SECOND_DELIMITER)
  const parsed: Parsed = {
    firstName: firstSplit[0] + (isIncludeDelimiter? FIRST_DELIMITER : ''),
    lastName: secondSplit[0] + (isIncludeDelimiter? SECOND_DELIMITER : ''),
    clientId: secondSplit[1]
  }
  return parsed
}

interface ToParse {
  data: string
}

interface Parsed {
  firstName: string
  lastName: string
  clientId: string
}
