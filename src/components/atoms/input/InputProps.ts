import { ChangeEvent } from 'react'

export interface InputProps {
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string
}
