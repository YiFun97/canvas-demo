var canvas = document.querySelector('#xxx')
var context = canvas.getContext('2d')

var pageWidth = document.documentElement.clientWidth
var pageHeight = document.documentElement.clientHeight
canvas.width = pageWidth
canvas.height = pageHeight

listenToMouse(canvas)

function drawCircle(x, y, radius) {
    context.beginPath()
    context.fillStyle = 'black'
    context.arc(x, y, radius, 0, Math.PI * 2)
    context.fill()
}

function drawline(x1, y1, x2, y2) {
    context.beginPath()
    context.strokeStyle = 'black'
    context.moveTo(x1, y1)
    context.lineWidth = 5
    context.lineTo(x2, y2)
    context.stroke()
    context.closePath()
}
function listenToMouse(canvas) {

    // painting值确定是否按下鼠标
    var using = false
    //上一次鼠标点击的坐标 
    var lastpoint = { x: undefined, y: undefined }
    canvas.onmousedown = function (a) {

        var x = a.clientX
        var y = a.clientY
        using = true
        if (eraserEnabled) {
            context.clearRect(x - 5, y - 5, 10, 10)
        } else {
            lastpoint = { x: x, y: y }
        }

    }

    canvas.onmousemove = function (a) {
        var x = a.clientX
        var y = a.clientY
        if(!using){return }
        if (eraserEnabled) {
          
                context.clearRect(x - 5, y - 5, 10, 10)
          

        } else {
            
                var newpoint = { x: x, y: y }
                drawline(lastpoint.x, lastpoint.y, newpoint.x, newpoint.y)
                lastpoint = newpoint
            
        }
    }

    canvas.onmouseup = function (a) {
        using = false
    }

}

// 
var eraserEnabled = false
// 点了橡皮擦把按钮隐藏 出现 ‘画笔’ 按钮
eraser.onclick = function () {
    eraserEnabled = true

    actions.className = 'actions x'

}
brush.onclick = function(){
    eraserEnabled = false
    actions.className = 'actions'
    
}

