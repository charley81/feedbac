import { useState, useEffect, useMemo } from 'react'
import Footer from './layout/footer'
import Container from './layout/container'
import HashtagList from './hashtag/hashtag-list'
import { TFeedbacItem } from '../lib/types'

function App() {
  const [feedbacItems, setFeedbacItems] = useState<TFeedbacItem[]>([])
  const [loading, setLoading] = useState(true)
  const [errMessage, setErrMessage] = useState('')
  const [selectedCompany, setSelectedCompany] = useState<string>('')

  const filteredFeedbacItems = useMemo(
    () =>
      selectedCompany
        ? feedbacItems.filter(
            (feedbackItem) => feedbackItem.company === selectedCompany
          )
        : feedbacItems,
    [selectedCompany, feedbacItems]
  )

  const companyList = useMemo(
    () =>
      feedbacItems
        .map((item) => item.company)
        .filter((company, index, array) => array.indexOf(company) === index),
    [feedbacItems]
  )

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

  const handleSetCompany = (company: string) => {
    setSelectedCompany(company)
  }

  useEffect(() => {
    fetchFeedbacItems()
  }, [])

  return (
    <div className="app">
      <Footer />
      <Container
        feedbacItems={filteredFeedbacItems}
        loading={loading}
        errMessage={errMessage}
        handleAddToList={handleAddToList}
      />
      <HashtagList
        companyList={companyList}
        handleSetCompany={handleSetCompany}
      />
    </div>
  )
}

export default App
