namespace SpriteKind {
    export const object = SpriteKind.create()
}
function Trampo () {
    // sets the sprite called "trampo"
    trampo = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
1 . . . . . . . . . . . . . . 1 
1 . . . . . . . . . . . . . . 1 
1 . . . . . . . . . . . . . . 1 
1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 
3 1 f 1 f 1 f 1 f 1 f 1 f 1 f 3 
3 f 1 f 1 f 1 f 1 f 1 f 1 f 1 3 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 1 . . . . . . . . . . 1 . . 
. 1 . . . . . . . . . . . . 1 . 
`, SpriteKind.object)
    // sets the starting position for the trampo
    trampo.setPosition(300, 520)
}
function Splash () {
    // sets splash text over the starting screen before
    // the game starts
    game.splash("Directions. To beat the", "highscore of 12")
}
function Jared () {
    // makes a sprite called "jared"
    jared = sprites.create(img`
. . . c c c c c c c c c . . . . . . . . 
. . c 5 5 5 5 5 5 5 5 5 c . . . . . . . 
. c 5 5 5 5 5 5 5 5 5 5 5 c . . . . . . 
. c 5 5 5 5 5 5 5 5 5 5 5 c . . . . . . 
. c 5 5 5 5 5 5 5 f 5 f 5 c c c c c c c 
. c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c 5 c 
. c 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c 
. c 5 5 5 5 5 5 5 5 5 5 5 c . . . . . . 
. c 5 5 5 5 5 5 5 5 5 5 5 c . . . . . . 
. c c c c c c c c c c c c c . . . . . . 
. c 7 7 7 7 7 7 7 7 7 7 7 c . . . . . . 
. c 7 7 7 7 7 7 7 7 7 7 7 c . . . . . . 
. c c c c c c c c c c c c c . . . . . . 
. . c . . c . . c . . c . . . . . . . . 
. . c . . c . . c . . c . . . . . . . . 
. . c c . c c . c c . c c . . . . . . . 
`, SpriteKind.Player)
    // the camera follows the sprite selected
    scene.cameraFollowSprite(jared)
    // sets the y acceleration for the selected sprite
    jared.ay = 100
    // sets the position x and y for the selected sprite
    jared.setPosition(300, 400)
    // sets a trailing effect from the sprite
    jared.startEffect(effects.trail)
    // makes the sprite say something for a certain amount
    // of time
    jared.say("yeye", 1000)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
    // changes the score by 1 when hitting the trampo
    info.changeScoreBy(1)
    // sets the trampo to a type of object
    trampo.setKind(SpriteKind.object)
    // sets the velocity for the selected sprite when
    // hitting the certain other sprite
    jared.vy = -105
    // tramp is able to pick any position from x and y
    trampo.x += Math.randomRange(-70, 70)
    trampo.y += Math.randomRange(-50, -60)
    // puts effects on the screen till the game has ended
    effects.blizzard.startScreenEffect()
})
function Countdown () {
    // sets the countdown and starts it
    info.startCountdown(10)
    info.changeLifeBy(-2)
}
let jared: Sprite = null
let trampo: Sprite = null
Splash()
Jared()
Countdown()
Trampo()
game.onUpdate(function () {
    // only jared can move through the x position not y
    jared.x += controller.dx()
})
