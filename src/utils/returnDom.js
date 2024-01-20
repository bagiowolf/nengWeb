import React from 'react'

const returnDom = (dom) => {
  if (!dom) return dom
  return <div dangerouslySetInnerHTML={{ __html: dom }}></div>
}
export default returnDom
