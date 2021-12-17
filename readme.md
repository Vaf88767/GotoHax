# O proposito do GotoHax é facilitar a criação de salas

```js
const HBIinit = window.HBInit
class Room {
  constructor(config) {
    this.config = config
    this.room
   }
   roominitial() {
       this.room = HBIinit(this.config)
   }
   
   

}

const createRoom = new Room({
   roomName: "teste",
	maxPlayers: 16,
	noPlayer: true
})
createRoom.roominitial()
```
pode parecer um pouco assustador mais o topo do codigo não é nescessario compreender

```js
createRoom.roominitial()
```
cria sua sala. As configuraçãos estão na definição do CreateRoom