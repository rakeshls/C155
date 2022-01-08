AFRAME.registerComponent("game-play",{
    schema:{
        elementId : {type: "string" ,default:"#ring1" }
    },
    isCollided: function(elementId){
        const element = document.querySelector(elementId)
        element.addEventListener("collide", (e)=>{
            if(elementId.includes("#ring")){
                console.log("Plane Collided with "+elementId)
            }
             else if (elementId.includes("#hurdle")){
                console.log("Plane Collided with "+elementId)
            }
        })
    },
    update: function(){
        this.isCollided(this.data.elementId)
    }
})

