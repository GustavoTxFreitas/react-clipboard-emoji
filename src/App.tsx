export default function App() {
  let arr = [
    'ʕ·ᴥ·ʔ',
    'ヾ(･ω･*)ﾉ',
    '( ´ ▽ ` )ﾉ',
    '(~‾▿‾)~',
    '(●__●)',
    'ヽ(=^･ω･^=)丿',
    '★ - ★)',
    '(人 •͈ᴗ•͈)',
    '(☆^ー^☆)',
    'U^ｪ^U',
    '(◍•ᴗ•◍)',
    '▼・ᴥ・▼',
    '(✿^‿^)',
    '(◕ᴗ◕✿)',
    '-ᄒᴥᄒ-'
  ]
  
  return (
    <div className="App">
      <h1>Hello Vite + React!</h1>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <ul>
        {arr.map(emoji => <li>{emoji}</li>)}
      </ul>
    </div>
  )
}
