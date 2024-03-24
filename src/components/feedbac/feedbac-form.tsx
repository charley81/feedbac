import { useState } from 'react'
import { MAX_CHARACTERS } from '../../lib/constants'
import { FeedbacFormProps } from '../../lib/types'

export default function FeedbacForm({ onAddToList }: FeedbacFormProps) {
  const [text, setText] = useState('')
  const charactersLeft = MAX_CHARACTERS - text.length

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value
    if (newText.length > MAX_CHARACTERS) {
      return
    }
    setText(newText)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onAddToList(text)
    setText('')
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea
        name="user-feedbac"
        id="feedbac-textarea"
        placeholder="placeholder-text"
        maxLength={MAX_CHARACTERS}
        spellCheck={false}
        onChange={handleChange}
        value={text}
      ></textarea>
      <label htmlFor="feedbac-textarea">Enter your feedbac here...</label>
      <div>
        <p className="u-italic">{charactersLeft}</p>
        <button type="submit">submit</button>
      </div>
    </form>
  )
}
