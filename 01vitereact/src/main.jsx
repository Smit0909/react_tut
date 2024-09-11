import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyReact(){
  return(
    <h1>My React</h1>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// } not working because inside react, it is demanding another syntax to create react element.

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
  anotherElement
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* {MyReact()}  => Bad Practice*/}
    {/* <MyReact /> */}
    {/* {anotherElement} */}
    {reactElement}
  </StrictMode>,
)
