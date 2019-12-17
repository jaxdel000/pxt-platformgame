namespace SpriteKind {
    export const object = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    jared.vy = -250
    trampo.setKind(SpriteKind.object)
    trampo.x += Math.randomRange(-70, 70)
    trampo.y += Math.randomRange(-50, -60)
})
let trampo: Sprite = null
let jared: Sprite = null
jared = sprites.create(img`
. . . . . 5 5 5 . . . . . . . . 
. . . 5 5 5 5 5 5 5 5 . . . . . 
. . 5 5 9 5 5 5 5 5 9 5 5 5 . . 
. 5 5 5 5 9 5 5 5 9 5 5 5 5 5 . 
. 5 5 5 5 5 9 5 9 5 5 5 5 5 5 5 
. 5 5 5 9 9 5 5 5 9 9 5 5 5 5 5 
5 5 5 5 9 9 5 5 5 9 9 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 9 9 9 9 9 9 9 5 5 5 5 5 
5 5 5 5 9 5 5 5 5 5 9 5 5 5 5 5 
5 5 5 5 9 5 5 5 5 5 9 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
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
1 e e e e e e e e e e e e e e 1 
e 1 f 1 f 1 f 1 f 1 f 1 f 1 f e 
e f 1 f 1 f 1 f 1 f 1 f 1 f 1 e 
. e e e e e e e e e e e e e e . 
. . 1 . . . . . . . . . . 1 . . 
. 1 . . . . . . . . . . . . 1 . 
`, SpriteKind.object)
jared.setPosition(300, 400)
trampo.setPosition(300, 520)
game.onUpdate(function () {
    jared.x += controller.dx()
})
