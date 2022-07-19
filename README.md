# Frontend Mentor - Fylo data storage component solution

This is a solution to the [Fylo data storage component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![desktop fylo data storage component](./solution/desktop-fylo-data-storage-component.png)

### Links

- Live Site URL: [Fylo data storage component with interactive slider](https://tsune-web.github.io/FM-Fylo-data-storage-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- PerfectPixel (Chrome extension)

### What I learned

1. Positioning a popup card

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
}
```

- Setting the parent element to position: relative;, the parent element keeps the flow of structure.
  This means while the parent element stays in the its position, the child element, which is set to
  position: absolute;, overlaps the left-top edge of its parent element.
  This also allows to position the child element with top/left/bottom/right properties.

2. Making a triangle

```css
.triangle {
  width: 0;
  height: 0;
  border: 5rem solid white;
  border-left-color: black;
  border-bottom-color: black;
}
```

### Continued development

- Positioning components and elements
- flexbox and grid layout

### Useful resources

- [How to create range sliders - w3schools](https://www.w3schools.com/howto/howto_js_rangeslider.asp) - This presents a few examples of how to customise range sliders including the default input range.

## Acknowledgments

I would like to show my gratitude to these programmers for concise and creative solutions:

- [range-slider - agrinko](https://github.com/agrinko/range-slider) - This shows various customise range sliders.
- [Cross Browser HTML5 Range Input - Dan](https://codepen.io/toomanyrequests/pen/ZNvEBj) - This provides a readily available customised range slider.
