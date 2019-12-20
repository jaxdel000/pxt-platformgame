namespace SpriteKind {
    export const object = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    jared.vy = -150
    trampo.setKind(SpriteKind.object)
    trampo.x += Math.randomRange(-70, 70)
    trampo.y += Math.randomRange(-50, -60)
    effects.blizzard.startScreenEffect()
})
let trampo: Sprite = null
let jared: Sprite = null
jared = sprites.create(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
2 2 2 1 1 1 2 2 2 2 2 2 2 2 2 2 
2 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 
1 1 3 3 3 3 3 3 3 3 3 1 1 1 1 1 
1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 9 9 3 3 3 3 3 3 3 3 3 9 9 3 
3 9 f f 9 3 3 3 3 3 3 3 9 f f 9 
3 9 f 1 9 3 9 3 9 3 9 3 9 1 f 9 
3 3 9 9 3 3 3 9 3 9 3 3 3 9 9 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`, SpriteKind.Player)
scene.cameraFollowSprite(jared)
jared.ay = 100
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
3 1 2 1 2 1 2 1 2 1 2 1 2 1 2 3 
3 2 1 2 1 2 1 2 1 2 1 2 1 2 1 3 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 1 . . . . . . . . . . 1 . . 
. 1 . . . . . . . . . . . . 1 . 
`, SpriteKind.object)
jared.setPosition(300, 400)
trampo.setPosition(300, 520)
jared.say("bounce do i yes", 1000)
info.startCountdown(10)
game.onUpdate(function () {
    jared.x += controller.dx()
})
