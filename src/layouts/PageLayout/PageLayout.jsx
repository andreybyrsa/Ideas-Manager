import classNames from 'classnames'

import './PageLayout.scss'

function PageLayout({ className, contentClassName, children, leftSidebar }) {
  const PageLayoutClassName = classNames('page-layout vh-100 vw-100', className)
  const PageLayoutContentClassName = classNames('w-100 p-3', contentClassName)

  return (
    <div className={PageLayoutClassName}>
      {leftSidebar && (
        <div className="page-layout__leftsidebar vh-100">{leftSidebar}</div>
      )}
      <div className={PageLayoutContentClassName}>{children}</div>
    </div>
  )
}

export default PageLayout
