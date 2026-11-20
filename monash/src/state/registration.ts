export interface RegistrationValues {
  title: string
  givenNames: string
  lastName: string
  mononymous: boolean
  preferredName: string
  birthdate: string
  countryOfBirth: string
  gender: string
  pronouns: string
  address: string
  updateAddress: boolean
  email: string
  homePhone: string
  mobilePhone: string
  changedName: boolean
  previousMonash: boolean
  citizenship: string
  indigenous: boolean | null
  consent: boolean | null
  disability: boolean | null
}

export interface UploadedDocument {
  name: string
  size: number
}

export interface RegistrationData {
  values: RegistrationValues
  documents: UploadedDocument[]
}
