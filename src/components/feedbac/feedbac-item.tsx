import { useState } from 'react'
import { TriangleUpIcon } from '@radix-ui/react-icons'
import { TFeedbacItem } from '../../lib/types'

type FeedbacItemProps = {
  feedbacItem: TFeedbacItem
}

export default function FeedbacItem({ feedbacItem }: FeedbacItemProps) {
  const [open, setOpen] = useState(false)
  const [upvoteCount, setUpvoteCount] = useState(feedbacItem.upvoteCount)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.disabled = true
    e.stopPropagation()
    setUpvoteCount((prev) => ++prev)
  }

  return (
    <li
      className={`feedback ${open && 'feedback--expand'}`}
      onClick={() => setOpen(!open)}
    >
      <button onClick={handleClick}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>

      <div>
        <p>{feedbacItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbacItem.company}</p>
        <p>{feedbacItem.text}</p>
      </div>

      <p>{feedbacItem.daysAgo === 0 ? 'New' : `${feedbacItem.daysAgo}d`}</p>
    </li>
  )
}
