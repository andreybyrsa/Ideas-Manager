import classNames from 'classnames'

import './PageLayout.scss'

function PageLayout({ className, contentClassName, children, leftSidebar }) {
  const PageLayoutClassName = classNames('page-layout', className)
  const PageLayoutContentClassName = classNames(
    'page-layout__content',
    contentClassName,
  )

  return (
    <div className={PageLayoutClassName}>
      {leftSidebar && (
        <div className="page-layout__leftsidebar">{leftSidebar}</div>
      )}
      <div className={PageLayoutContentClassName}>{children}</div>
    </div>
  )
}

export default PageLayout
