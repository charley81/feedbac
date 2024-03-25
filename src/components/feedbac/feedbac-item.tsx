import { useState } from 'react'
import { TriangleUpIcon } from '@radix-ui/react-icons'
import { TFeedbacItem } from '../../lib/types'

type FeedbacItemProps = {
  feedbacItem: TFeedbacItem
}

export default function FeedbacItem({ feedbacItem }: FeedbacItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <li
      className={`feedback ${open && 'feedback--expand'}`}
      onClick={() => setOpen(!open)}
    >
      <button>
        <TriangleUpIcon />
        <span>{feedbacItem.upvoteCount}</span>
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
