import Header from './header'
import FeedbacList from '../feedbac/feedbac-list'
import { ContainerProps } from '../../lib/types'

export default function Container({
  feedbacItems,
  loading,
  errMessage,
  handleAddToList
}: ContainerProps) {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbacList
        feedbacItems={feedbacItems}
        loading={loading}
        errMessage={errMessage}
      />
    </main>
  )
}
