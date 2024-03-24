import { TriangleUpIcon } from '@radix-ui/react-icons'
import { TFeedbacItem } from '../../lib/types'

type FeedbacItemProps = {
  feedbacItem: TFeedbacItem
}

export default function FeedbacItem({ feedbacItem }: FeedbacItemProps) {
  return (
    <li className="feedback">
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
