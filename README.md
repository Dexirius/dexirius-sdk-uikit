# 🥞 Dexirius UIkit

Dexirius UIkit is a set of React components and hooks used to build pages on Dexirius apps. It also contains a theme file for dark and light mode.

## Install

`yarn add dexirius-sdk-uikit`

## Setup

### Theme

Before using Dexirius UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from 'dexirius-sdk-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from 'dexirius-sdk-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.


