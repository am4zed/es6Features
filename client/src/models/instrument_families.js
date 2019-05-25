// const PubSub = require('../helpers/pub_sub.js');
import PubSub from "../helpers/pub_sub.js";

// const InstrumentFamilies = function (data) {
//   this.data = data;
// };

// CONSTRUCTOR FUNCTION
class InstrumentFamilies {
  constructor(data){
    this.data = data;
  };

  // METHOD DEFINITIONS
  bindEvents(){
    PubSub.publish('InstrumentFamilies:data-ready', this.data);

    PubSub.subscribe('SelectView:change', (evt) => {
      const selectedIndex = evt.detail;
      this.publishFamilyDetail(selectedIndex);
    });
  };

  publishFamilyDetail(selectedIndex) {
    const selectedFamily = this.data[selectedIndex];
    PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily);
  };

};


// PROTOTYPE-BASED INHERITANCE
// InstrumentFamilies.prototype.bindEvents = function () {
//   PubSub.publish('InstrumentFamilies:data-ready', this.data);
//
//   PubSub.subscribe('SelectView:change', (evt) => {
//     const selectedIndex = evt.detail;
//     this.publishFamilyDetail(selectedIndex);
//   });
// };

// InstrumentFamilies.prototype.publishFamilyDetail = function (selectedIndex) {
//   const selectedFamily = this.data[selectedIndex];
//   PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
// };

// module.exports = InstrumentFamilies;
export {InstrumentFamilies as default};
