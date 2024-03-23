import { TriangleUpIcon } from '@radix-ui/react-icons'

type FeedbacItem = {
  id: number
  upVoteCount: number
  badgeLetter: string
  companyName: string
  text: string
  daysAgo: string
}

type FeedbacItemProps = {
  feedbacItem: FeedbacItem
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
