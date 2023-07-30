import classNames from 'classnames'

import './PageLayout.scss'

function PageLayout({ className, contentClassName, children, leftSidebar }) {
  const PageLayoutClassName = classNames('page-layout vw-100', className)
  const PageLayoutContentClassName = classNames(
    'p-3 w-100 overwlow-scroll',
    contentClassName,
  )

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
