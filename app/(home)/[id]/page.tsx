'use client'
import { fetchItem } from '@/actions/items.action'
import ItemContainer from './_components/ItemContainer'
import { QiitaItem } from '@/type'
import React, { useLayoutEffect, useState } from 'react'
import BackButton from '@/components/BackButton'
import ItemContainerSkeleton from './_components/ItemContainerSkeleton'
import { useRecoilValue } from 'recoil'
import { apiKeyState } from '@/app/state/apiKeyState'

const page = ({ params: { id } }: { params: { id: string } }) => {
  const apiKey = useRecoilValue(apiKeyState)
  const [itemData, setItemData] = useState<QiitaItem>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  useLayoutEffect(() => {
    setLoading(true)
    fetchItem(id, apiKey)
      .then((itemData) => {
        setItemData(itemData)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [])

  return (
    <div className="flex flex-col gap-2">
      <BackButton />
      {error ? (
        <div className="text-red-500 text-base flex my-2">Error: Failed to get a data.</div>
      ) : loading ? (
        <ItemContainerSkeleton />
      ) : (
        <ItemContainer itemData={itemData} />
      )}
    </div>
  )
}

export default page
