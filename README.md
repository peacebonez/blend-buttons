## Blend Buttons

<img  src="https://i.imgur.com/lCVtGW0.jpg"  width="120"  height="120">

### `Intro`

Simple button component that will match its aesthetic to its parents'.

(React functional component button element that adjusts its styles to its direct parents' styles.)<br  />

The button's **font-color** matches that of its direct **parent's background color**. The button's **background-color** is assigned by user via **"colorMain" prop**. **While hovering**, the background will match that of its direct parent, and the font-color and border will transition to "colorMain" prop color.

### Demo

Demo on Netlify [Blend Buttons Demo](https://loving-edison-6a8a92.netlify.app/)

### `Installation`

### npm

`npm i react-blend-buttons`

### `Usage`

    import BlendButton from "react-blend-buttons";

    //All custom props being utilized

    <BlendButton
    btnText={"Blend Button"}
    colorMain={"goldenrod"}
    borderRadius={"10px"}
    padding={"3vw"}
    fontSize={"18px"}
    />

     Use the BlendButton component wherever you would use a button element.

    //No props

    <Blendbutton />

### `Configuration`<br />

You can configure your BlendButton via props...

- btnText: Text to be displayed in button.
  - Type: String.
  - Default value is "Submit".
- colorMain: Color assigned to button background-color, btnText color, and border while being hovered.

  - Type: String.
  - Default Value is "black"

- borderRadius: Sets button border-radius.

  - Type: String.
  - Default value is "0px".

- padding: Sets buttons padding.

  - Type: String.
  - Default value is ".8vw 2vw".

- fontSize: Sets buttons font-size.

  - Type: String.
  - Default value is button element default size.

- onClick

  - Type: function
  - To user executes just as react's onClick handler executes.

  ### Blend Buttons accept all the same attributes that html buttons accept but as props.

- name
- style
- value
- type
- autofocus
- disabled
- formenctype
- formmethod
- formaction
- formnovalidate
- formtarget

  <BlendButton name={"email"} value={password} />

### `Custom Styling`<br />

All Blend Buttons are rendered with a class of "blend-btn". <br />

Styling Blend Buttons in a style sheet **will not work** as the inline style built in the component will overwrite it. Instead, pass your own style object as a prop. This will merge your style object with the style object already in place. <br />

    <BlendButton style={{fontFamily: "helvitica",  display: "block"}} />



Each Blend button is rendered with a unique id of<br />
"blend-btn-[4 digit unique id]"

# Blend Buttons
