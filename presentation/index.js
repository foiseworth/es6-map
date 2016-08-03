// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";


// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              ES6 Map
            </Heading>
            
            <Heading size={4} fit caps lineHeight={1} textColor="black">
              by Andrew Herrington with code samples from <a href= "http://www.2ality.com/2015/01/es6-maps-sets.html" target="_blank">2ality</a>
            </Heading>
          </Slide>
          
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Why do we a Map when we have Objects?
            </Heading>
            <Markdown>
              {`
* a key can be any value (even an object)
* better api
* no more prototype issues
              `}
            </Markdown>
          </Slide>
          
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={2} caps lineHeight={1} textColor="black">
              Basic Operations
            </Heading>
            <CodePane
              lang="js"
              fit
              source={require("raw!../assets/basic-operations.example")}
            />
          </Slide>
          
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={2} caps lineHeight={1} textColor="black">
              Size and Clear
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/size-and-clear.example")}
              margin="20px auto"
            />
          </Slide>
          
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={2} caps lineHeight={1} textColor="black">
              Map Setup
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/map-setup.example")}
              margin="20px auto"
            />
          </Slide>
          
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={2} caps lineHeight={1} textColor="black">
              Iterating
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/iterating.example")}
              margin="20px auto"
            />
          </Slide>
          
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={2} caps lineHeight={1} textColor="black">
              Iterating (some more)
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/iterating-more.example")}
              margin="20px auto"
            />
          </Slide>
          
        </Deck>
      </Spectacle>
    );
  }
}
