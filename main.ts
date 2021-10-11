scene.setBackgroundColor(15)
let hour = 0
let minute = 0
let second = 0
let displaytime = "" + convertToText(hour) + ":" + convertToText(minute) + ":" + convertToText(second)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.sayText(displaytime)
game.onUpdateInterval(1000, function () {
    second += 1
    if (second == 60) {
        second = 0
        minute += 1
    }
    if (minute == 60) {
        minute = 0
        hour += 1
    }
    if (hour == 24) {
        hour = 0
        minute = 0
        second = 0
    }
})
