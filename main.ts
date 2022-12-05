namespace SpriteKind {
    export const LeftPaddle = SpriteKind.create()
    export const Rightpaddle = SpriteKind.create()
}
function MakeBall () {
    Ball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 3 3 3 2 . . . . . 
        . . . . 2 3 2 2 2 3 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 2 3 3 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Ball.setVelocity(100, 100)
    Ball.setBounceOnWall(true)
    Ball.y = randint(0, 120)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftPaddle, function (sprite, otherSprite) {
    Ball.vx = Ball.vx * -1
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rightpaddle, function (sprite, otherSprite) {
    Ball.vx = Ball.vx * -1
    info.player2.changeScoreBy(1)
})
function leftPaddle () {
    LeftPad = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 8 9 . . . . . . . . . . . 
        . . . 8 9 . . . . . . . . . . . 
        . . . 8 9 . . . . . . . . . . . 
        . . . 8 9 . . . . . . . . . . . 
        . . . 8 9 . . . . . . . . . . . 
        . . . 8 9 . . . . . . . . . . . 
        . . . 8 9 . . . . . . . . . . . 
        . . . 8 9 . . . . . . . . . . . 
        . . . 8 9 . . . . . . . . . . . 
        . . . 8 9 . . . . . . . . . . . 
        . . . 8 9 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.LeftPaddle)
    controller.moveSprite(LeftPad, 0, 150)
    LeftPad.left = 0
    LeftPad.setStayInScreen(true)
}
function RightPaddle () {
    RightPad = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 9 6 . . . 
        . . . . . . . . . . . 9 6 . . . 
        . . . . . . . . . . . 9 6 . . . 
        . . . . . . . . . . . 9 6 . . . 
        . . . . . . . . . . . 9 6 . . . 
        . . . . . . . . . . . 9 6 . . . 
        . . . . . . . . . . . 9 6 . . . 
        . . . . . . . . . . . 9 6 . . . 
        . . . . . . . . . . . 9 6 . . . 
        . . . . . . . . . . . 9 6 . . . 
        . . . . . . . . . . . 9 6 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Rightpaddle)
    controller.player2.moveSprite(RightPad, 0, 150)
    RightPad.right = 160
    RightPad.setStayInScreen(true)
}
let RightPad: Sprite = null
let LeftPad: Sprite = null
let Ball: Sprite = null
MakeBall()
leftPaddle()
RightPaddle()
