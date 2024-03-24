import FeedbacItem from './feedbac-item'
import { FeedbacListProps } from '../../lib/types'
import Spinner from '../spinner'
import ErrorMessage from '../error-message'

export default function FeedbackList({
  feedbacItems,
  loading,
  errMessage
}: FeedbacListProps) {
  return (
    <ol className="feedback-list">
      {loading && <Spinner />}
      {errMessage && <ErrorMessage message={errMessage} />}
      {feedbacItems.map((feedbacItem) => (
        <FeedbacItem feedbacItem={feedbacItem} key={feedbacItem.id} />
      ))}
    </ol>
  )
}
