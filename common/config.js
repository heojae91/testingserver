var jsonArray = [];
var jsonContent = {"ppu":"0.55","batters":{"batter":[{"id":"1001","type":"Regular"},{"id":"1002","type":"Chocolate"},{"id":"1003","type":"Blueberry"},{"id":"1004","type":"Devil's Food"}]},"name":"Cake","id":"0001","type":"donut","topping":[{"id":"5001","type":"None"},{"id":"5002","type":"Glazed"},{"id":"5005","type":"Sugar"},{"id":"5007","type":"Powdered Sugar"},{"id":"5006","type":"Chocolate with Sprinkles"},{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}],"sales":"35"};

var config = {
    container : "#basic-example"
};

// for (key in jsonContent) {
//     if (typeof jsonContent[key] != "string")
//         // alert("not string");
// }
var hello = "hi";
var simple_chart_config = {
    "chart": {
        "container": "#basic-example"
    },

    "nodeStructure": {
        "text": {
            "name": "Parent node"
        },
        "children": [{
            "text": {
                "name": "First child"
            },
            "children": [{
                "name" : "grand child"
            }]
        }, {
            "text": {
                "name": "Second child"
            }
        }]
    }
};

// $('json-viewer').json_viewer(jsonContent);   