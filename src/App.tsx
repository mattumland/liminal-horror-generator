import logo from "./assets/liminalhorror.webp"
import './App.css'

function App(): React.ReactElement {

  return (
    <>
      <header>
        {/* <a src="https://liminalhorrorrpg.com/" className="hover:cursor-pointer"> */}
        <img src={logo} alt='Liminal Horror' className="m-auto mt-10 max-w-sm"/>
        {/* </a> */}
      </header>
      <button className='bg-liminal-yellow hover:bg-black mt-3 px-5 py-1 border-1 border-liminal-yellow rounded hover:text-liminal-yellow hover:line-through transition-all hover:cursor-pointer'>New character</button>
      <section className="m-5 border-1 border-x-0 text-liminal-yellow">
        <div className="flex justify-around p-5 text-left">
          <div>
            <h1 className="text-2xl">Guy Humanman</h1>
            <h2 className="text-xl">Factory Worker</h2>
            <div className="min-w-md">
              <p>STRENGTH 12</p>
            </div>
            <div className="min-w-md">
              <p>DEXTERITY 09</p>
            </div>
            <div className="min-w-md">
              <p>CONTROL 11</p>
            </div>
            <p>HP</p>
            <p>Deprived</p>
            <p>Armor: 1</p>
            <p>Stability: 0</p>
          </div>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="bg-liminal-yellow p-1 text-black">INVENTORY</th>
              </tr>
            </thead>
            <tbody>
              <tr>Cellphone</tr>
              <tr>Industrial apron</tr>
              <tr>Safety harness</tr>
              <tr>Thermos</tr>
              <tr>{"        "}</tr>
              <tr>{"        "}</tr>
              <tr>{"        "}</tr>
              <tr>{"        "}</tr>
              <tr>{"        "}</tr>
              <tr>{"        "}</tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default App
