import { useState, useEffect } from 'react'
import Footer from './components/footer'
import Container from './components/container'
import HashtagList from './components/hashtag-list'
import { TFeedbacItem } from './lib/types'

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

  const handleAddToList = (text: string) => {
    if (!text) return

    const companyName = text
      .split(' ')
      .find((char: string) => char.includes('#'))!
      .substring(1)

    const newItem: TFeedbacItem = {
      id: new Date().getTime(),
      upVoteCount: 0,
      badgeLetter: companyName[0],
      companyName: companyName,
      daysAgo: '0d',
      text
    }

    setFeedbacItems([newItem, ...feedbacItems])
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
