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
