// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button Active' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button" className={tabBtnClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
