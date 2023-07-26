import classNames from 'classnames'

import './PageLayout.scss'

function PageLayout({ className, children }) {
  const PageLayoutClassName = classNames('page-layout', className)

  return <div className={PageLayoutClassName}>{children}</div>
}

export default PageLayout
