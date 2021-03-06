AFRAME.registerComponent('marker-handler',{
    init: async function(){
        this.el.addEventListener('markerFound',()=>{
            this.handleMarkerFound()
        })
        this.el.addEventListener('markerLost',()=>{
            this.handleMarkerLost()
        })
    },

    handleMarkerFound: function(){
        var buttonDiv = document.getElementById('button-div')
        buttonDiv.style.display = 'flex'
        var ratingButton = document.getElementById('ratingButton')
        var orderButton = document.getElementById('orderButton')
        ratingButton.addEventListener('click',()=>{
            swal({
                icon:'warning',
                title:'rate dish',
                text:'Work in Progress'
            })
        })
        orderButton.addEventListener('click',()=>{
            swal({
                icon:'https://i.imgur.com/4NZ6uLY.jpg',
                title:'Thanks for ordering',
                text:'Your order will be served'
            })
        })
    },

    handleMarkerLost: function(){
        var buttonDiv = document.getElementById('button-div')
        buttonDiv.style.display = 'none'
    },


})