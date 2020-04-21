const uiModule = (function () {

    const displaySingleChar= (data)=>{
        // container for card
        const container = document.createElement("div");
        container.setAttribute("class","card-container");
        //front of card 
        const front =document.createElement("div");
        front.setAttribute("class","card-front");
        const picture = document.createElement("img");
        const name= document.createElement("h1");
        // back of card
        const back =document.createElement("div");
        back.setAttribute("class","card-back");
        
        const addInfo=(charInfo)=>{
            charInfo.forEach(singleInfo=>{
                const info =document.createElement("div");
                info.setAttribute("class","info");
                singleInfo.forEach(single => {
                    const text =document.createElement("h3");
                    text.innerHTML=single
                    info.appendChild(text)
                })
                back.appendChild(info)
            })
        }
        addInfo(data.info)
        const mPart=document.querySelector(".main")

        picture.setAttribute("src", `${data.photo}`)
        name.innerHTML=`${data.name}`


        front.appendChild(picture)
        front.appendChild(name)

        container.appendChild(front)
        container.appendChild(back)
        mPart.appendChild(container)
    }

    const displayAllChar=(data)=>{
        data.forEach(char => {
            displaySingleChar(char) 
        });
    }  
    return {
        displayAllChar
    }
  

})()