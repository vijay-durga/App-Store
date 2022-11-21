import './index.css'

const AppItem = props => {
  const {eachAppItem} = props
  const {appName, imageUrl} = eachAppItem

  return (
    <li className="cont">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="para">{appName}</p>
    </li>
  )
}

export default AppItem
