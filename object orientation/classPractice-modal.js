function Modal(name, fill, stroke, title) {
    this.fill = fill;
    this.stroke = stroke;
    this.title = title;
    this.name = name;
}
Modal.prototype.showModal = function () {
    console.log(this.name);
    console.log(this.title);
    console.log(this.fill);
    console.log(this.stroke);
}

function Alert(name, fill, stroke, title) {
    Modal.call(this, name, fill, stroke, title);
    this.type = 'i am an alert!';
}
// console.log(Alert.prototype)
// console.log(Modal.prototype)
Alert.prototype = Object.create(Modal.prototype)
// console.log(Alert.prototype)
// console.log(Modal.prototype)
Alert.prototype.showAlert = function () {
    console.log('i am ' + this.name + ' and i am an alert!');
}
var myAlert_ALBERT = new Alert('ALBERT', 'red', 'green', 'this is ALBERT title');

myAlert_ALBERT.showModal();
console.log('-------------------------------------------------');
myAlert_ALBERT.showAlert();