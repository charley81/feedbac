export type TFeedbacItem = {
  id: number
  upVoteCount: number
  badgeLetter: string
  companyName: string
  text: string
  daysAgo: string
}

export type ContainerProps = {
  feedbacItems: TFeedbacItem[]
  loading: boolean
  errMessage: string
  handleAddToList: (text: string) => void
}

export type FeedbacListProps = {
  feedbacItems: TFeedbacItem[]
  loading: boolean
  errMessage: string
}

export type FeedbacFormProps = {
  onAddToList: (text: string) => void
}
