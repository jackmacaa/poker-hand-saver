const seatMap = {};
const playerInputMap = {};
const playerSaveMap = {};

for(let i = 1; i < 10; i++){
    seatMap[`seat_${i}`] = document.getElementById(`seat-${i}`);
    playerInputMap[`player_input_${i}`] = document.getElementById(`player-input-${i}`);
    playerSaveMap[`player_save_${i}`] = document.getElementById(`player-save-${i}`);
}

for(const seat in seatMap){
    seatMap[seat].addEventListener('click', () => {
        if(playerInputMap[`player_input_${seat[5]}`].classList.contains('hidden')) {
            playerInputMap[`player_input_${seat[5]}`].classList.remove('hidden');
            seatMap[seat].classList.add('highlight');
        } else {
            playerInputMap[`player_input_${seat[5]}`].classList.add('hidden');
            seatMap[seat].classList.remove('highlight');
        }
    });          
}

for(const playerSave in playerSaveMap){
    playerSaveMap[playerSave].addEventListener('click', () => {
        playerInputMap[`player_input_${playerSave[12]}`].classList.add('hidden');
        seatMap[`seat_${playerSave[12]}`].classList.remove('highlight');       
});
}