<p align="center">
  <img src="/assets/intro-img.png" alt="react lean model npm install image" width="80%" height="auto" />
</p>
  
This package exposes a `<Modal />` component which is fully controlled by a single prop. It comes packed with enter and exit animations for all your motion needs.

It's currently powered by [react-transition-group](https://reactcommunity.org/react-transition-group/) but I'm planning to turn it into a zero-dependency package in the near future so that it doesn't hurt your [bundle size](https://bundlephobia.com/package/react-lean-modal).

<p align="center">
  <a href="https://github.com/SneakySensei/react-lean-modal/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/SneakySensei/react-lean-modal"></a>
  <a href="https://www.npmjs.com/package/react-lean-modal"><img alt="npm" src="https://img.shields.io/npm/v/react-lean-modal"></a>
  <a href="https://www.npmjs.com/package/react-lean-modal"><img alt="npm" src="https://img.shields.io/npm/dm/react-lean-modal"></a>
  <a href="https://twitter.com/SnehilCodes"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/SnehilCodes?style=social"></a>
</p>

## Installation

**With NPM**

```bash
npm install react-lean-modal
```

**With Yarn**

```bash
yarn add react-lean-modal
```

## Usage
  
```js
  <Modal
    enterAnimation="fade"
    exitAnimation="fade"
    timeout={250}
    isOpen={showModal}
    onClose={() => setShowModal(false)}
    titleElement={<h3>Example Modal</h3>}
  />
```
    
## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| isOpen | Whether the modal is open or closed | `boolean` | `false` |
| onClose | 	Function that's called when a close action is registered. This is where we set the isOpen prop to false | `() => void` | - |
| children | Content to render inside the modal's content area | `React.ReactNode` | - |
| enterAnimation | The animation to show when modal opens | [AnimationType](#animationtype) | `"zoom-in"` |
| exitAnimation | The animation to show when modal closes. Behaves as the reverse of enterAnimation. | [AnimationType](#animationtype) | `"zoom-in"` |
| timeout | The duration of animations in milliseconds | `number` | `250`(ms) |
| titleElement | Content to render on the left of the modal header | `React.ReactNode` | - |
| closeIcon | Content to render inside the close button | `React.ReactNode` | Included SVG |
| classNames | Additional class names to apply to the modal | `{root?: string, backdrop?: string, content?: string, header?: string, closeButton?: string, body?: string}` | `{}` |
    
## AnimationType
    
`
    "fade" | "fade-left" | "fade-right" | "fade-top" | "fade-bottom" | "slide-left" | "slide-right" | "slide-top" | "slide-bottom" | "zoom-in" | "zoom-out" | "spin-cw" | "spin-ccw" | "rotate-left" | "rotate-right" | "rotate-top" | "rotate-bottom"
`
