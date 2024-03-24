import Logo from '../logo'
import PageHeading from '../page-heading'
import FeedbacForm from '../feedbac/feedbac-form'

export default function Header({ handleAddToList }) {
  return (
    <header>
      <Logo />
      <PageHeading />
      <FeedbacForm onAddToList={handleAddToList} />
    </header>
  )
}
