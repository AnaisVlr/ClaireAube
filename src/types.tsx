export interface QuestionType {
  question: string,
  answer: string
}

export interface PrestationType {
  title: string,
  class: string,
  description: string,
  link: string
}

export interface TimelineItem {
  title: string,
  image: string
}

export interface TimelineType {
  timelineItems: TimelineItem[]
}

export interface RitualItemType {
  name: string,
  image: string,
  description: string,
  link: string,
  size: number
}

