
document.addEventListener('DOMContentLoaded', function(){
    // console.log('hello from ready')

    var button = document.getElementById('clicker-button')
    
    button.addEventListener('click', function(){
        // This function is our EVENT HANDLER
        // It is a CALLBACK function
        console.log('You clicked!', event)
        
        // event.target gives us the DOM element that triggered the event
        
        // var theSource = event.target
        // theSource.addEventListener('click', function(){
        //     console.log('clicker')
        // })
        
    })
    
    // console.log('Hello!')
    
    // function myFunc(){
    //     console.log('running')
    // }
    // myFunc()
    
    
    
    document.getElementById('content-input').addEventListener('keyup', function(){
        console.log('KEY!', event)
        
        // Listen for the ENTER key
        if(event.which === 13){
            var inputValue = event.target.value
            document.getElementById('content-box').innerHTML = inputValue
        }
        
    })

})

// Native JS
// document.getElementsByTagName('div').forEach(function(domNode){
//     domNode.addEventListener('click', function(){
//         // do the stuff
//     })
// })
// Jquery
// $('div').on('click', function(){
//     // do the stuff
// })
// Angular
// <div ng-click="theClicker()"></div>
// this.thisClicker = function(){
//     // do the stuff
// }


