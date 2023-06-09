import { AvailableMarketsType, ApiNameTitles, ApiDataType } from '@/api'

const host: string = 'http://localhost:3000/api/v1'

const afterErrorReconnectDelay: number = 500

const currencyPairs: AvailableMarketsType[] = [
  'RUB/CUPCAKE',
  'USD/CUPCAKE',
  'EUR/CUPCAKE',
  'RUB/USD',
  'RUB/EUR',
  'EUR/USD',
]

const theadList: string[] = ['Pair name/market', 'First', 'Second', 'Third']

type ApiValueType = { [key in ApiNameTitles]: string }

const initApiValue: ApiValueType = {
  firstApi: '',
  secondApi: '',
  thirdApi: '',
}

const initApiData: ApiDataType = {
  firstApi: null,
  secondApi: null,
  thirdApi: null,
}

export {
  host,
  currencyPairs,
  theadList,
  initApiValue,
  initApiData,
  afterErrorReconnectDelay,
}

export type { ApiValueType }
