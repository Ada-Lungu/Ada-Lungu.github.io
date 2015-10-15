/**
 * Created by ada on 30/09/15.
 */

defaultHouse = {
    "name":"Your house",
    "rooms":[

        {
            "width":"327px",
            "height":"182px",
            "top":"316px",
            "left":"556px",
            "name":"Kitchen",
            "image": "img/kitchen.jpeg"
        },

        {
            "width":"327px",
            "height":"216px",
            "top":"100px",
            "left":"556px",
            "name":"Bedroom1",
            "image": "img/bedroom.jpeg"
        },

        {
            "width":"332px",
            "height":"398px",
            "top":"100px",
            "left":"234px",
            "name":"Livingroom",
            "image": "img/livingroom.jpeg"
        },

        {
            "width":"244px",
            "height":"231px",
            "top":"498px",
            "left":"234px",
            "name":"WorkRoom",
            "image": "img/workroom.jpeg"
        },

        {
            "width":"214px",
            "height":"143px",
            "top":"498px",
            "left":"510px",
            "name":"Bathroom",
            "image": "img/bath.jpeg"

        },

        {
            "width":"134px",
            "height":"461px",
            "top":"115px",
            "left":"105px",
            "name":"Terrace",
            "image": "img/terrace.jpeg"
        },
    ],

    "utilities": [
    {
        "name": "tap-water",
        "type": "water",
        "consumption": "1",
        "state": "off",
        "room": "Bathroom",
        "counter": "0",
        "width": "50px",
        "height": "50px",
        "left": "85px",
        "top": "20px",
        "symbol":"fa-tint"
    },
    {
        "name": "shower-water",
        "type": "water",
        "consumption": "1",
        "state": "off",
        "room": "Bathroom",
        "counter": "0",
        "width": "50px",
        "height": "50px",
        "left": "160px",
        "top": "40px",
        "symbol":"fa-tint"
    },
    {
        "name": "flash-water",
        "type": "water",
        "consumption": "1",
        "state": "off",
        "room": "Bathroom",
        "counter": "0",
        "width": "50px",
        "height": "50px",
        "left": "25px",
        "top": "35px",
        "symbol":"fa-tint"
    },
    {
        "name": "tap-water",
        "type": "water",
        "consumption": "1",
        "state": "off",
        "room": "Kitchen",
        "counter": "0",
        "width": "50px",
        "height": "50px",
        "left": "90px",
        "top": "140px",
        "symbol":"fa-tint"
    },
    {
        "name": "lightbulb",
        "type": "electricity",
        "consumption": "1",
        "state": "off",
        "room": "Bedroom1",
        "counter": "0",
        "width": "50px",
        "height": "50px",
        "left": "60px",
        "top": "120px"
    },
    {
        "name": "lightbulb",
        "type": "electricity",
        "consumption": "1",
        "state": "off",
        "room": "Livingroom",
        "counter": "0",
        "width": "50px",
        "height": "50px",
        "left": "10px",
        "top": "10px"
    },
    {
        "name": "TV",
        "type": "electricity",
        "consumption": "1",
        "state": "off",
        "room": "Livingroom",
        "counter": "0",
        "width": "50px",
        "height": "50px",
        "left": "295px",
        "top": "40px",
        "symbol":"fa-bolt"
    },
    {
        "name": "lightbulb",
        "type": "electricity",
        "consumption": "1",
        "state": "off",
        "room": "WorkRoom",
        "counter": "0",
        "width": "10px",
        "height": "10px",
        "left": "10px",
        "top": "10px"
    },
    {
        "name": "lightbulb",
        "type": "electricity",
        "consumption": "1",
        "state": "off",
        "room": "Kitchen",
        "counter": "0",
        "width": "10px",
        "height": "10px",
        "left": "10px",
        "top": "10px"
    },
    {
        "name": "oven",
        "type": "electricity",
        "consumption": "2",
        "state": "off",
        "room": "Kitchen",
        "counter": "0",
        "width": "50px",
        "height": "50px",
        "left": "103px",
        "top": "38px",
        "symbol":"fa-bolt"
    },
    {
        "name": "fridge",
        "type": "electricity",
        "consumption": "4",
        "state": "off",
        "room": "Kitchen",
        "id": "ovenKitchen",
        "counter": "0",
        "width": "50px",
        "height": "50px",
        "left": "290px",
        "top": "140px",
        "symbol":"fa-bolt"
    },
    {
        "name": "lightbulb",
        "type": "electricity",
        "consumption": "1",
        "state": "off",
        "room": "Bathroom",
        "counter": "0",
        "width": "50px",
        "height": "50px",
        "left": "10px",
        "top": "10px",
    },
    {
        "name": "washing-machine",
        "type": "electricity",
        "consumption": "1",
        "state": "off",
        "room": "Bathroom",
        "counter": "0",
        "width": "50px",
        "height": "50px",
        "left": "170px",
        "top": "100px",
        "symbol":"fa-bolt"

    },
    {
        "name": "lightbulb",
        "type": "electricity",
        "consumption": "1",
        "state": "off",
        "room": "Terrace",
        "counter": "0",
        "width": "10px",
        "height": "10px",
        "left": "40px",
        "top": "40px"
    },
    {
        "name": "heating-system",
        "type": "gas",
        "consumption": "1",
        "state": "off",
        "room": "Bedroom1",
        "counter": "0",
        "width": "50px",
        "height": "50px",
        "left": "290px",
        "top": "120px",
        "symbol":"fa-fire"
    },
    {
        "name": "heating-system",
        "type": "gas",
        "consumption": "1",
        "state": "off",
        "room": "Livingroom",
        "counter": "0",
        "width": "50px",
        "height": "50px",
        "left": "230px",
        "top": "25px",
        "symbol":"fa-fire"
    },
    {
        "name": "heating-system",
        "type": "gas",
        "consumption": "1",
        "state": "off",
        "room": "WorkRoom",
        "counter": "0",
        "width": "50px",
        "height": "50px",
        "left": "15px",
        "top": "100px",
        "symbol":"fa-fire"
    },
    {
        "name": "heating-system",
        "type": "gas",
        "consumption": "1",
        "state": "off",
        "room": "Kitchen",
        "counter": "0",
        "width": "50px",
        "height": "50px",
        "left": "285px",
        "top": "80px",
        "symbol":"fa-fire"
    },
    {
        "name": "heating-system",
        "type": "gas",
        "consumption": "1",
        "state": "off",
        "room": "Bathroom",
        "counter": "0",
        "width": "50px",
        "height": "50px",
        "left": "90px",
        "top": "100px",
        "symbol":"fa-fire"
    }
],
    "general_counters": [{"type":"electricity", "counter":"0", "color":"#FFB90F", "symbol":"fa-bolt"},
                         {"type":"water", "counter":"0", "color":"#20ACCC", "symbol":"fa-tint"},
                         {"type":"gas", "counter":"0", "color":"#ADBD20", "symbol":"fa-fire"}

    ]

}