import { useState } from 'react'
import { MAX_CHARACTERS } from '../lib/constants'

export default function FeedbacForm() {
  const [text, setText] = useState('')
  const charactersLeft = MAX_CHARACTERS - text.length

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value
    if (newText.length > MAX_CHARACTERS) {
      return
    }
    setText(newText)
  }

  return (
    <form className="form">
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
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  )
}
