import React from 'react'
import { MdNavigateBefore } from 'react-icons/md'
import { Button } from '@/components/ui/button'
import { useRecoilState } from 'recoil'
import { queryState } from '@/app/state/queryState'

const PrevButton = () => {
  const [query, setQuery] = useRecoilState(queryState)
  const handlePrev = () => {
    const newQuery = structuredClone(query)
    newQuery.numPage -= 1
    setQuery(newQuery)
  }

  return (
    <Button variant="outline" size="icon" onClick={handlePrev}>
      <MdNavigateBefore className="h-4 w-4" />
    </Button>
  )
}

export default PrevButton
