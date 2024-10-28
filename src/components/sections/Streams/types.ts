export type PlayerType = 'livestream' | 'video'

type CommonProps = {
  name: string
  url: string
  image: string
  description: string
}

export type PlayerInfo =
  | ({ type: 'livestream'; viewCount: number; language: string } & CommonProps)
  | ({ type: 'video' } & CommonProps)
