import classNames from 'classnames'

import './PageLayout.scss'

function PageLayout({ className, children, leftSidebar }) {
  const PageLayoutClassName = classNames('page-layout', className)

  return (
    <div className={PageLayoutClassName}>
      <div className="page-layout__leftsidebar">{leftSidebar}</div>
      {children}
    </div>
  )
}

export default PageLayout
