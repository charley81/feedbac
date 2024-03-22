export default function FeedbacForm() {
  return (
    <form className="form">
      <textarea
        name=""
        id="feedbac-textarea"
        placeholder="placeholder-text"
        maxLength={150}
        spellCheck={false}
      ></textarea>
      <label htmlFor="feedbac-textarea">Enter your feedbac here...</label>
      <div>
        <p className="u-italic">150</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  )
}
