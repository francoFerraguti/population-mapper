import React from "react";


/*
	Read a text file and out put the content.
	
	Example Usage:
	var myTxt = require("./myTxt.txt");
	...
	<TextFileReader
		txt={myTxt}
	/>
 */
class TextFileReader extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.readTextFile(this.props.txt);
    }

    readTextFile = file => {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = () => {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    this.props.readData(allText);
                }
            }
        };


        rawFile.send(null);
    };

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default TextFileReader;
