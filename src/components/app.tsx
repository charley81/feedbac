import { useState, useEffect } from 'react'
import Footer from './layout/footer'
import Container from './layout/container'
import HashtagList from './hashtag-list'
import { TFeedbacItem } from '../lib/types'

function App() {
  const [feedbacItems, setFeedbacItems] = useState<TFeedbacItem[]>([])
  const [loading, setLoading] = useState(true)
  const [errMessage, setErrMessage] = useState('')

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

  const handleAddToList = async (text: string) => {
    const companyName = text
      .split(' ')
      .find((char: string) => char.includes('#'))!
      .substring(1)

    const newItem: TFeedbacItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase()
    }

    setFeedbacItems([...feedbacItems, newItem])

    await fetch(
      'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks',
      {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
  }

  useEffect(() => {
    fetchFeedbacItems()
  }, [])

  return (
    <div className="app">
      <Footer />
      <Container
        feedbacItems={feedbacItems}
        loading={loading}
        errMessage={errMessage}
        handleAddToList={handleAddToList}
      />
      <HashtagList />
    </div>
  )
}

export default App
