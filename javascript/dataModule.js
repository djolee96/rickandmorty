const dataModule = (function () {

    function fetchCharacter(onSuccess,index) {
        const url = `https://rickandmortyapi.com/api/character/?page=${index}`;
        const myCharacters = []
        $.get(url, function (data) {

            const list = data

            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
            }
            const num= getRandomInt(0,20)
            for (let i = num ; i < num+6 ; i++) {
                const character = new Character(list.results[i].name, list.results[i].image,list.results[i].status,list.results[i].species,list.results[i].gender,list.results[i].origin.name,list.results[i].location.name)
                myCharacters.push(character)
                
            }
            onSuccess(myCharacters) ;
        })
    }
    
    class Character {
        constructor(name, photo,status,species,gender,origin,location) {
            this.name = name;
            this.photo = photo;
            this.info= [
                ["Status",status],
                ["Species", species],
                ["Gender",gender],
                ["Origin",origin],
                ["Location",location]
            ]
        }
    }

    return {
        fetchCharacter
    }

})()