import { useEffect, useState } from 'react'
import FeedbacItem from './feedbac-item'
import { FeedbacItemType } from '../lib/types'
import Spinner from './spinner'
import ErrorMessage from './error-message'

export default function FeedbackList() {
  const [feedbacItems, setFeedbacItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [errMessage, setErrMessage] = useState('')

  useEffect(() => {
    fetchFeedbacItems()
  }, [])

  const fetchFeedbacItems = async () => {
    setLoading(true)
    try {
      const res = await fetch(
        'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
      )
      if (!res.ok) throw new Error('Network response was not ok')
      const data = await res.json()
      setFeedbacItems(data.feedbacks)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setErrMessage('Something went wrong')
    }
  }

  return (
    <ol className="feedback-list">
      {loading ? <Spinner /> : null}
      {errMessage ? <ErrorMessage message={errMessage} /> : null}
      {feedbacItems.map((feedbacItem: FeedbacItemType) => (
        <FeedbacItem feedbacItem={feedbacItem} key={feedbacItem.id} />
      ))}
    </ol>
  )
}
