import React from 'react'
import { MdNavigateNext } from 'react-icons/md'
import { Button } from '@/components/ui/button'
import { useRecoilState } from 'recoil'
import { queryState } from '@/app/state/queryState'

const NextButton = () => {
  const [query, setQuery] = useRecoilState(queryState)
  const handleNext = () => {
    const newQuery = structuredClone(query)
    newQuery.numPage += 1
    setQuery(newQuery)
  }

  return (
    <Button variant="outline" size="icon" onClick={handleNext}>
      <MdNavigateNext className="h-4 w-4" />
    </Button>
  )
}

export default NextButton
