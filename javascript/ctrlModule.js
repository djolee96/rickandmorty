const ctrlModule = (function (data, ui) {
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
    }
    const num= getRandomInt(1,5)

    data.fetchCharacter(ui.displayAllChar,num)

})(dataModule, uiModule)