function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
		return "<h4>"+n+"</h4><table>"+
			"<tr><td>Number of Respondants:</td></tr><tr><td>"+(d.number_of_respondants)+"</td></tr>"+
			"</table>";
	}
	
	
	
	var sampleData = {
	"HI":{number_of_respondants: 69, color:"#e6e6ff"},
	"AK":{number_of_respondants: 84, color: "#e6e6ff"},
	"FL":{number_of_respondants: 1099, color: "#0000ff"},
	"SC":{number_of_respondants: 223, color: "#b3b3ff"},
	"GA":{number_of_respondants: 614, color: "#8080ff"},
	"AL":{number_of_respondants: 228, color: "#b3b3ff"},
	"NC":{number_of_respondants: 686, color: "#8080ff"},
	"TN":{number_of_respondants: 416, color: "#b3b3ff"},
	"RI":{number_of_respondants: 119, color: "#ccccff"},
	"CT":{number_of_respondants: 319, color: "#b3b3ff"},
	"MA":{number_of_respondants: 1195, color: "#0000ff"},
	"ME":{number_of_respondants: 128, color: "#ccccff"},
	"NH":{number_of_respondants: 225, color: "#b3b3ff"},
	"VT":{number_of_respondants: 163, color: "#ccccff"},
	"NY":{number_of_respondants: 1779, color: "#0000b3"},
	"NJ":{number_of_respondants: 550, color: "#8080ff"},
	"PA":{number_of_respondants: 1171, color: "#0000ff"},
	"DE":{number_of_respondants: 84, color: "#e6e6ff"},
	"MD":{number_of_respondants: 662, color: "#8080ff"},
	"WV":{number_of_respondants: 83, color: "#e6e6ff"},
	"KY":{number_of_respondants: 274, color: "#b3b3ff"},
	"OH":{number_of_respondants: 941, color: "#8080ff"},
	"MI":{number_of_respondants: 894, color: "#8080ff"},
	"WY":{number_of_respondants: 44, color: "#e6e6ff"},
	"MT":{number_of_respondants: 72, color: "#e6e6ff"},
	"ID":{number_of_respondants: 155, color: "#ccccff"},
	"WA":{number_of_respondants: 1667, color: "#0000b3"},
	"DC":{number_of_respondants: 214, color: "#b3b3ff"},
	"TX":{number_of_respondants: 1490, color: "#0000ff"},
	"CA":{number_of_respondants: 3453, color:"#000066"},
	"AZ":{number_of_respondants: 537, color: "#8080ff"},
	"NV":{number_of_respondants: 206, color: "#b3b3ff"},
	"UT":{number_of_respondants: 270, color: "#b3b3ff"},
	"CO":{number_of_respondants: 669, color: "#8080ff"},
	"NM":{number_of_respondants: 213, color: "#b3b3ff"},
	"OR":{number_of_respondants: 1152, color: "#0000ff"},
	"ND":{number_of_respondants: 46, color: "#e6e6ff"},
	"SD":{number_of_respondants: 43, color: "#e6e6ff"},
	"NE":{number_of_respondants: 165, color: "#ccccff"},
	"IA":{number_of_respondants: 219, color: "#b3b3ff"},
	"MS":{number_of_respondants: 82, color: "#e6e6ff"},
	"IN":{number_of_respondants: 452, color: "#b3b3ff"},
	"IL":{number_of_respondants: 1082, color: "#0000ff"},
	"MN":{number_of_respondants: 670, color: "#8080ff"},
	"WI":{number_of_respondants: 541, color: "#8080ff"},
	"MO":{number_of_respondants: 509, color: "#8080ff"},
	"AR":{number_of_respondants: 222, color: "#b3b3ff"},
	"OK":{number_of_respondants: 215, color: "#b3b3ff"},
	"KS":{number_of_respondants: 197, color: "#ccccff"},
	"LS":{number_of_respondants: 274, color: "#b3b3ff"},
	"VA":{number_of_respondants: 723, color: "#8080ff"}
	};
	
	/* draw states on id #statesvg */	
	uStates.draw("#statesvg", sampleData, tooltipHtml);
	
	d3.select(self.frameElement).style("height", "600px"); 