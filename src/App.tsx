import copy from "copy-to-clipboard";  

export default function App() {
  let arr: string[] = [
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
  
  const copyToClipboard = (text: string) => {
    copy(text);
    alert(`${text} foi copiado`);
  }

  return (
    <div className="App">
      <h1>Hello Vite + React!</h1>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <ul>
        {arr.map(emoji => <li onClick={() => copyToClipboard(emoji)}>{emoji}</li>)}
      </ul>
    </div>
  )
}
