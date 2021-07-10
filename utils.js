console.log('utils.js')

const Name = 'Mike'

const add = function (a,b) {
    return a+b
}

//다른 파일에서 사용 가능
//module.exports = Name
module.exports = add