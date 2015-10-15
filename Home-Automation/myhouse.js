var house = {
    "name":"Your house",
    "rooms":[
        {
            "id":1,
            "width":"200px",
            "height":"300px",
            "top":"100px",
            "left":"100px",
            "name":"Bedroom1"
        },

        {
            "id":2,
            "width":"410px",
            "height":"200px",
            "top":"400px",
            "left":"100px",
            "name":"Bedroom2"
        },

        {
            "id":3,
            "width":"200px",
            "height":"150px",
            "top":"100px",
            "left":"300px",
            "name":"Working Room"
        },

        {
            "id":4,
            "width":"400px",
            "height":"500px",
            "top":"100px",
            "left":"300px",
            "name":"Kitchen/Lounge"
            
        },

        {
            "id":5,
            "width":"190px",
            "height":"110px",
            "top":"600px",
            "left":"510px",
            "name":"Bathroom"

        },   

        {
            "id":6,
            "width":"410px",
            "height":"140px",
            "top":"600px",
            "left":"100px",
            "name":"Terrace"
        }, 
    ],

    "utilities": [
        {"name": "tap-water", "type":"water-waste", "consumption":"1", "state":"off", "room":"Bathroom"},
        {"name": "tap-water", "type":"water-waste", "consumption":"1", "state":"off", "room":"Kitchen"},
        {"name": "lightbulb", "type":"electricity", "consumption":"1", "state":"off", "room":"Kitchen"},
        {"name": "heating-system", "type":"gas", "consumption":"1", "state":"off", "room":"Kitchen"}
        
        ],

    "counter": [
                    {"consumption":"0", "type":"electricity"}
                ]

}