interface ButtonProps {
  text: string;
}

function Button(props: ButtonProps) {
  return <button>{props.text}</button>
}

function App() {
  return (
    <div>
      <Button text="Send"/>
      <Button text="Recive"/>
    </div>
  )
}

export default App
