class Arrayz{
    constructor(){
      this.data =  Array();
    }
    add(idx) {
      this.data.push(idx);
    }
    remove(idx){
      if(this.data[idx]!= null){
        this.data.pop(idx);  
      }
        return "this data is null"
    };
    Getidx(idx) {
      return this.data[idx];
    }
    size() {
      return this.data.length;
    };
    trim() {
      var listCur = 0;
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i] != null) {
          listCur = listCur + 1;
        }
      }
      return listCur;
    }
  }
  
  module.exports = Arrayz;