import FeedbacItem from './feedbac-item'

const feedbacItems = [
  {
    upVoteCount: 593,
    badgeLetter: 'B',
    companyName: 'Chris Harley',
    text: 'test test test',
    daysAgo: '4d'
  },
  {
    upVoteCount: 593,
    badgeLetter: 'B',
    companyName: 'Chris Harley',
    text: 'test test test',
    daysAgo: '4d'
  },
  {
    upVoteCount: 593,
    badgeLetter: 'B',
    companyName: 'Chris Harley',
    text: 'test test test',
    daysAgo: '4d'
  }
]

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedbacItems.map((feedbacItem) => (
        <FeedbacItem feedbacItem={feedbacItem} key={feedbacItem.companyName} />
      ))}
    </ol>
  )
}
