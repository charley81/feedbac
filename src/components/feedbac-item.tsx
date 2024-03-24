import { TriangleUpIcon } from '@radix-ui/react-icons'
import { TFeedbacItem } from '../lib/types'

type FeedbacItemProps = {
  feedbacItem: TFeedbacItem
}

export default function FeedbacItem({ feedbacItem }: FeedbacItemProps) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbacItem.upVoteCount}</span>
      </button>

      <div>
        <p>{feedbacItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbacItem.companyName}</p>
        <p>{feedbacItem.text}</p>
      </div>

      <p>4d</p>
    </li>
  )
}
