import { QiitaItem } from '@/type'
import React from 'react'
import ItemBody from './ItemBody'
import { Card } from '@/components/ui/card'
import ItemHeader from './ItemHeader'

const ItemContainer = ({ itemData }: { itemData?: QiitaItem }) => {
  return (
    <Card className="p-4">
      {itemData && (
        <>
          <ItemHeader itemData={itemData} />
          <ItemBody body={itemData.body} />
        </>
      )}
    </Card>
  )
}

export default ItemContainer
