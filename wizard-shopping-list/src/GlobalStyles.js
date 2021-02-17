import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    align-items: center;    
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    margin: 0;    
  }
`