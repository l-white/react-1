const Words = ({firstNoun, secondNoun, adjective, color, month}) => {
  return (
    <div>
    <p>{`There was once a(n) ${adjective} ${firstNoun} who had a(n) ${color} ${secondNoun}. On the last day of ${month}, the ${firstNoun} decided it no longer needed the ${secondNoun}.`}</p>
    <p>The End.</p>
    </div>
  )
}

export default Words;