import React from "react"
import ReactDOM from "react-dom"

export function MenuPortal( props ) {
  return ReactDOM.createPortal( <> { props.render() } </>, document.getElementById('menu_mobile') )
}