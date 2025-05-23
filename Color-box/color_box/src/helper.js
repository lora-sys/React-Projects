const rgbValue=()=>{
    return Math.floor(Math.random()*256)
}
const generateRandom=(num)=>{
let colors=[]
for(let i=0;i<num;++i){
    const red=rgbValue()
    const green=rgbValue()
    const blue=rgbValue()
    colors.push(`rgb(${red},${green},${blue})`)
}
return colors
}
export {rgbValue,generateRandom}