import type { FC } from 'react'

// interface IDayNoteProps {
  
// }

export const DayNote:FC = () => {

  return (
    <>
      <h1>Write down your day!</h1>
      <p>{"How was your day? Joyful? Exhausting? Spill it out! I will help you with this :)"}</p>

      <form className="flex" action="post">
        <div className="form-field">
          <label htmlFor="">
            <h3>Rate it!</h3>

            <div className="flex">
              {Array.from({length: 20}).map((_, index) => (
                <div key={index+1} className="rate">
                  <div className="smile block h-1 w-1" />
                  <span className="">{index+1}</span>
                </div>
              ))}
            </div>
          </label>

          
        </div>
      </form>
    </>
  )
}