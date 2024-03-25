export type TFeedbacItem = {
  id: number
  upvoteCount: number
  badgeLetter: string
  company: string
  text: string
  daysAgo: number
}

export type ContainerProps = {
  feedbacItems: TFeedbacItem[]
  loading: boolean
  errMessage: string
  handleAddToList: (company: string) => void
}

export type FeedbacListProps = {
  feedbacItems: TFeedbacItem[]
  loading: boolean
  errMessage: string
}

export type FeedbacFormProps = {
  onAddToList: (text: string) => void
}

export type HashTagListProps = {
  companyList: string[]
  handleSetCompany: (company: string) => void
}

export type HashtagItemProps = {
  company: string
  onSelectCompany: (company: string) => void
}
