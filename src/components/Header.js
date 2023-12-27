import logo from '../logo.svg'

export default function Header() {
  return(
    <div className='header'>
    <img className='header--image' src={logo} />
    <h2 className='header--title'>Meme Generator</h2>
    <h3 className='header--project'>AwesomeStuff</h3>
    </div>
  )
}