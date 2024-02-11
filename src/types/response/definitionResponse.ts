export type PhoneticType = {
  audio: string
  text: string
}
type DefinitionType = {
  antonyms: string[]
  synonyms: string[]
  definition: string
}

type MeaningType = {
  antonyms: string[]
  synonyms: string[]
  definitions: DefinitionType[]
  partOfSpeech: string
}

export type DefinitionResponse = {
  word: string
  phonetics: PhoneticType[]
  sourceUrls: string[]
  meanings: MeaningType[]
}
