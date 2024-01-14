import React from 'react'

const returnDom = (dom) => {
  return <div dangerouslySetInnerHTML={{ __html: dom }}></div>
}
export default returnDom
