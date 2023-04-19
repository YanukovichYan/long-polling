import { api, MarketsResponseData } from '@/api'
import { afterErrorReconnectDelay } from '@/config'

import { useEffect, useState } from 'react'

export const useSubscribeToSecondApi = <
  TResponseData = MarketsResponseData,
>() => {
  const [dataFromSecondApi, setDataFromSecondApi] =
    useState<TResponseData | null>(null)

  const updateFromSecondApi = async () => {
    try {
      const { data } = await api.secondPoll<TResponseData>()

      if (data) {
        setDataFromSecondApi(data)
      }

      await updateFromSecondApi()
    } catch (e: unknown) {
      setTimeout(() => {
        updateFromSecondApi()
      }, afterErrorReconnectDelay)
    }
  }

  useEffect(() => {
    updateFromSecondApi()
  }, [])

  return {
    dataFromSecondApi,
  }
}