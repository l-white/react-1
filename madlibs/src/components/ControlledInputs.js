import {useState} from 'react';
import Words from './Words'
import { useInput } from '../hooks/useInput'

const ControlledInputs = () => {
  const [firstNoun, setFirstNoun] = useInput("");
  const [secondNoun, setSecondNoun] = useInput("");
  const [adjective, setAdjective] = useInput("");
  const [color, setColor] = useInput("");
  const [month, setMonth] = useInput("");
  const [story, setStory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
      const words = {
        id: new Date().getTime().toString(),
        firstNoun: firstNoun.value,
        secondNoun: secondNoun.value,
        adjective: adjective.value,
        color: color.value,
        month: month.value
      }
      setStory((story) => {
        // copy story from state and add words
        return [...story, words]
      });
      setFirstNoun('');
      setSecondNoun('');
      setAdjective('');
      setColor('');
      setMonth('');
  }

  return (
    <>
      <article>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstNoun">First Noun: 
          </label>
          <br />
          <input 
            type="text" 
            id="firstNoun" 
            name="firstNoun"
            placeholder="Noun"
            value={firstNoun}
            {...firstNoun}
          />
          <br />
          <label htmlFor="secondNoun">Second Noun: 
          </label>
          <br />
          <input 
            type="text" 
            id="secondNoun" 
            name="secondNoun"
            placeholder="Noun"
            value={secondNoun}
            {...secondNoun}
          />
          <br />
          <label htmlFor="adjective">Adjective: 
          </label>
          <br />
          <input 
            type="text" 
            id="adjective" 
            name="adjective"
            placeholder="Adjective"
            value={adjective}
            {...adjective}
          />
          <br />
          <label htmlFor="color">Color: 
          </label>
          <br />
          <input 
            type="text" 
            id="color" 
            name="color"
            placeholder="Color"
            value={color}
            {...color}
          />
          <br />
          <label htmlFor="color">Month: 
          </label>
          <br />
          <input 
            type="text" 
            id="month" 
            name="month" 
            placeholder="Month" 
            value={month}
            {...month}
          />
          <br />
          <button type="submit">Create Story</button>
        </form>
        {story.map((words, id) => <Words key={id} firstNoun={words.firstNoun} secondNoun={words.secondNoun} adjective={words.adjective} color={words.color} month={words.month}/>)}
        </article>
    </>
  )
}

export default ControlledInputs;
