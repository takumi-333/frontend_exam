import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { LuCopy, LuCheck } from 'react-icons/lu'

export default function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(code)

    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <div className="copy-button">
      <Button size="icon" onClick={handleClick}>
        {copied ? <LuCheck className="h-4 w-4" /> : <LuCopy className="h-4 w-4" />}
      </Button>
    </div>
  )
}
