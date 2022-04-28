const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

 const chainMaker = {
  currChain: [],

  getLength() {
    return this.currChain.length
  },
  addLink(content) {
    this.currChain.push(`( ${content} )`)
    return this
  },
  removeLink(position) {

    if (this.checkIntegerNumber(position)) {
      if (position < 1 || position > this.getLength()) {
        this.deleteChain()
        throw new Error(`You can't remove incorrect link!`)
      }
      const index = position - 1
      this.currChain.splice(index, 1)
      return this
    }
    this.deleteChain()
    throw new Error(`You can't remove incorrect link!`)
  },
  reverseChain() {
    this.currChain.reverse()
    return this
  },
  finishChain() {
    const chain = this.getChain()
    this.deleteChain()
    return chain
  },
  deleteChain() {
    this.currChain.length = 0
  },
  checkIntegerNumber(num) {
    return typeof num === "number"
  },
  getChain() {
    return this.currChain.join('~~')
  }

};

module.exports = {
  chainMaker
};
