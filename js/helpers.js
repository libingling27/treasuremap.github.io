const getRandom = size => {
    return Math.floor(Math.random() * size);
}

const getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY + diffY));
}

let getDistanceHint = distance => {
    if(distance < 30){
        return "越来越近啦!!"
    }else if(distance < 60){
        return "快了快了！"
    }else if(distance < 100){
        return "前面好像有一个神秘箱子！"
    }else if(distance < 180){
        return "糟糕！遇到了神庙守卫，快跑！"
    }else if(distance < 300){
        return "加油！宝藏就快找到了"
    }else if(distance < 400){
        return "在古老的地方找到了第一个线索...."
    }else{
        return "Congelado"
    }
}