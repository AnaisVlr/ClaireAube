import { ReactNode } from "react"

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

export interface QuestionType {
  question: string;
  answer: ReactNode; 
}

export interface FAQType {
  questionList: QuestionType[];
}

export interface CityTravel {
  city: string;
  byCar: string;
}

export interface LocalisationType {
  title?: string;
  cities: CityTravel[];
}

