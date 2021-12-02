$(document).ready(function() {
    $("#slider1").tinycarousel()
})

const app = new Vue({
    el: '#app',
    data: {
        props:{
            mainTitle:'OUR TEAM',
            secondTitle:'PROFESSIONAL PC REPAIR TEAM',
            pr : {
                l1:'Since our establishment,',
                l2:'we have gathered a team of',
                l3:'dedicated PC repair',
                l4:'professionals.'
            }
        },
        users:[
            {
                id: 1,
                imgurl:'images/foto1.jpg',
                name: 'John Tuff',
                occupation: 'Field Technician'
            },
            {
                id: 2,
                imgurl:'images/foto2.jpg',
                name: 'Frank McMillan',
                occupation: 'General Manager'
            }, 
            {
                id: 3,
                imgurl:'images/foto3.jpg',
                name: 'John Smith',
                occupation: 'Field Technician'
            },
            {
                id: 4,
                imgurl:'images/foto4.jpg',
                name: 'Ben Fitzgerald',
                occupation: 'Repair Technician'
            },
            {
                id: 5,
                imgurl:'images/foto5.jpg',
                name: 'Ben Wilson',
                occupation: 'Customer Service Manager'
            }
        ]
    },
})