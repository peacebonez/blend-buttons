## Blend Buttons

### `Intro`
Simple button component that will match its aesthetic to its parents'.
(React functional component button element that adjusts its styles to its direct parents' styles.)<br />

The button's **font-color** matches that of its direct **parent's background color**. The button's **background-color** is assigned by user via **"colorMain" prop**.  **While hovering**, the background will match that of its direct parent, and the font-color and border will transition to "colorMain" prop color.

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
- colorMain: Color assigned to button background-color and btnText color and border when being hovered
	- Type: String.
	- Default Value is "black"
- borderRadius: Adjusts button border-radius.  
	- Type: String.
	- Default value is "0px".
- padding: Adjusts buttons padding.  
 	- Type: String.
	- Default value is "2vw".
- fontSize: Adjusts buttons font-size.
 	- Type: String.
 	- Default value is button element default size.
	



# blend-buttons
