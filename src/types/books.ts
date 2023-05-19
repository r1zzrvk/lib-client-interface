type TDimemsions = {
  height: string
}

type TReadingModes = {
  text: boolean
  image: boolean
}

type TPanelizationSummary = {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}

export type TImageLinks = {
  smallThumbnail: string
  thumbnail: string
  small: string
  medium: string
  large: string
  extraLarge: string
}

type TLayer = {
  layerId: string
  volumeAnnotationsVersion: string
}

type TLayerInfo = {
  layers: TLayer[]
}

type TIndustryIdentifier = {
  type: string
  identifier: string
}

type TVolumeInfo = {
  title: string
  authors: string[]
  publisher: string
  publishedDate: string
  industryIdentifiers: TIndustryIdentifier[]
  description: string
  readingModes: TReadingModes
  pageCount: number
  printedPageCount: number
  dimensions: TDimemsions
  printType: string
  categories: string[]
  averageRating: number
  ratingsCount: number
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: TPanelizationSummary
  imageLinks: TImageLinks
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}

type TSaleInfo = {
  country: string
  saleability: string
  isEbook: boolean
}

type TStatus = {
  isAvailable: boolean
  acsTokenLink: string
}

type TAccessInfo = {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: TStatus
  pdf: TStatus
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

export type TBook = {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: TVolumeInfo
  layerInfo: TLayerInfo
  saleInfo: TSaleInfo
  accessInfo: TAccessInfo
}

export type TResponse = {
  items: TBook[]
  kind: string
  totalItems: number
}
