let defualtCity = '上海'
try {
    if(localStorage.city){
        defualtCity=localStorage.city
    }
}catch (e) {

}
export default {
    city:defualtCity
}