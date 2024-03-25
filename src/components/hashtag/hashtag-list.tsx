import { HashTagListProps } from '../../lib/types'
import HashtagItem from './hastag-item'

export default function HashtagList({
  companyList,
  handleSetCompany
}: HashTagListProps) {
  return (
    <ul className="hashtags">
      {companyList.map((company: string) => (
        <HashtagItem company={company} onSelectCompany={handleSetCompany} />
      ))}
    </ul>
  )
}
