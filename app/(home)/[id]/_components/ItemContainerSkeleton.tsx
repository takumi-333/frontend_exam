import { Skeleton } from '@/components/ui/skeleton'
import { Card } from '@/components/ui/card'
import React from 'react'

const ItemContainerSkeleton = () => {
  return (
    <Card>
      <Skeleton className="w-full h-screen" />
    </Card>
  )
}

export default ItemContainerSkeleton
