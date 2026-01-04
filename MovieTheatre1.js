let jsonString = {
    "TheatreName": "Cineplex",
    "Elite":[
        [
            {"SeatNo": "A1", "Status": "Available", "Price": 750},
            {"SeatNo": "A2", "Status": "Booked", "Price": 750},
            {"SeatNo": "A3", "Status": "Booked", "Price": 750},
            {"SeatNo": "A4", "Status": "Available", "Price": 750},
            {"SeatNo": "A5", "Status": "Booked", "Price": 750},
        ],
        [
            {"SeatNo": "B1", "Status": "Booked", "Price": 750},
            {"SeatNo": "B2", "Status": "Available", "Price": 750},
            {"SeatNo": "B3", "Status": "Booked", "Price": 750},
            {"SeatNo": "B4", "Status": "Available", "Price": 750},
            {"SeatNo": "B5", "Status": "Booked", "Price": 750},

        ]
    ],
    "Normal":[
        [
            {"SeatNo": "C1", "Status": "Available", "Price": 450},
            {"SeatNo": "C2", "Status": "Booked", "Price": 450},
            {"SeatNo": "C3", "Status": "Booked", "Price": 450},
            {"SeatNo": "C4", "Status": "Available", "Price": 450},
            {"SeatNo": "C5", "Status": "Booked", "Price": 450},
        ],
        [
            {"SeatNo": "D1", "Status": "Booked", "Price": 450},
            {"SeatNo": "D2", "Status": "Available", "Price": 450},
            {"SeatNo": "D3", "Status": "Booked", "Price": 450},
            {"SeatNo": "D4", "Status": "Available", "Price": 450},
            {"SeatNo": "D5", "Status": "Booked", "Price": 450},

        ]
    ],
    "Economy":[
        [
            {"SeatNo": "E1", "Status": "Available", "Price": 250},
            {"SeatNo": "E2", "Status": "Booked", "Price": 250},
            {"SeatNo": "E3", "Status": "Booked", "Price": 250},
            {"SeatNo": "E4", "Status": "Available", "Price": 250},
            {"SeatNo": "E5", "Status": "Booked", "Price": 250},
        ],
        [
            {"SeatNo": "E1", "Status": "Booked", "Price": 250},
            {"SeatNo": "E2", "Status": "Available", "Price": 250},
            {"SeatNo": "E3", "Status": "Booked", "Price": 250},
            {"SeatNo": "E4", "Status": "Available", "Price": 250},
            {"SeatNo": "E5", "Status": "Booked", "Price": 250},

        ]
    ]
}
/*
In the given snippet, "Elite" is the property name (or key) of a JavaScript object. Its value is a nested array that contains two inner arrays.

The outer object has a property called "Elite" (a string key).

The value for "Elite" is an array that contains two arrays.

Each inner array holds multiple objects, where each object represents a seat with properties like SeatNo, Status, and Price.

Essentially, "Elite" organizes the seats into groups, possibly representing sections, rows, or categories. You can access specific seat objects inside these nested arrays using indices, 

// Book 2 seats in Elite category if available
// Book 3 seats in Normal category if available
// Book 4 seats in Economy category if available
// Calculate to the total amount to be paid for the booked seats*/