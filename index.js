class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b)=>{
      return a-b
    })
    this.length = this.items.length
  }

  get(pos) {
    if (!this.items[pos]) {
      throw OutOfBounds
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (!this.length){
      throw EmptySortedList
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (!this.length){
      throw EmptySortedList
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    if (!this.items){
      return 0
    } else {
      return this.items.reduce((acc, num)=>{
        return acc + num}, 0)
    }
  }

  avg() {
    if (!this.items[0]){
      throw EmptySortedList
    } else {
      return (this.sum()/this.length)
    }
  }
}

module.exports = SortedList;

sortedList = new SortedList()
sortedList.add(1)
sortedList.add(3)
sortedList.add(2)
console.log(sortedList.sum())
