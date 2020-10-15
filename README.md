## Blend Buttons

### `Intro`

Simple button component that will match its aesthetic to its parents'.
(React functional component button element that adjusts its styles to its direct parents' styles.)<br />

The button's **font-color** matches that of its direct **parent's background color**. The button's **background-color** is assigned by user via **"colorMain" prop**. **While hovering**, the background will match that of its direct parent, and the font-color and border will transition to "colorMain" prop color.

### `Installation`

### npm

`npm i blend-buttons`

### `Usage`

    import BlendButton from "blend-buttons";

    //All props being utilized
    <BlendButton
    	btnText={"Blend Button"}
    	colorMain={"goldenrod"}
    	borderRadius={"10px"}
    	padding={"3vw"}
    	fontSize={"18px"}
    />

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

# Blend Buttons
