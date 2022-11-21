import './index.css'

const TabItem = props => {
  const {eachTabItem, toChangeTabItems, isActive} = props
  const {displayText, tabId} = eachTabItem

  const isActiveButton = isActive ? 'activeBtn' : ''

  const changingTabs = () => {
    toChangeTabItems(tabId)
  }

  return (
    <li className="listedTabItems">
      <button
        type="button"
        className={`listedTabItems ${isActiveButton} `}
        onClick={changingTabs}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
