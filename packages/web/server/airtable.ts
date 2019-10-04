import Airtable from 'airtable'
import getConfig from 'next/config'

let airTableSingleton

export default function airtableInit(baseID: string) {
  const { serverRuntimeConfig } = getConfig()

  if (!airTableSingleton) {
    airTableSingleton = new Airtable({ apiKey: serverRuntimeConfig.AIRTABLE_API_KEY })
  }
  return airTableSingleton.base(baseID)
}

export interface AirRecord<Fields> {
  id: string
  fields: Fields
  save: () => unknown
  patchUpdate: () => unknown
  putUpdate: () => unknown
  destroy: () => unknown
  fetch: () => unknown
  updateFields: () => unknown
  replaceFields: () => unknown
  _rawJson: {
    id: string
    fields: Fields
    createdTime: string
  }
}
