"use strict";
const seat9 = document.getElementById('seat-9');
const playerInput9 = document.getElementById('player-input-9');
const playerSave9 = document.getElementById('player-save-9');
const showHidePlayerInput = () => {
    if (playerInput9 && seat9) {
        if (playerInput9.classList.contains('hidden')) {
            playerInput9.classList.remove('hidden');
            seat9.classList.add('highlight');
        }
        else {
            playerInput9.classList.add('hidden');
            seat9.classList.remove('highlight');
        }
    }
};
if (seat9 && playerSave9) {
    seat9.addEventListener('click', showHidePlayerInput);
    playerSave9.addEventListener('click', showHidePlayerInput);
}
//   eval('const seat' + `${i}` + ' =  document.getElementById(seat-' + `${i}` + ')' );
//  const numberOfPlayers = tableData;
