function superbowlWin(array){
    let record = array.find(record => record.result == "W")
    if(record){
        return record.year
    }
}