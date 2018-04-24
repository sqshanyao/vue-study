// 我们的数据对象
var data = { a: 1 }

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
  data: data
})

// 获得这个实例上的属性
// 返回源数据中对应的字段
/* vm.a == data.a // => true
var t = vm.a;
console.log(t);
console.log("-----");
console.log(data.a);
console.log(vm.a);
// 设置属性也会影响到原始数据
vm.a = 2
data.a // => 2
console.log(data.a);
console.log(vm.a);
// ……反之亦然
data.a = 3
vm.a // => 3
console.log(data.a);
console.log(vm.a);
console.log("-----");
console.log(t); */


var obj = {
	foo:'bar'
}

// 加了这个后将不会实时更新数据
// Object.freeze(obj)


var shili = new Vue({
	el:'#shi-1',
	data:obj
})


// vm.$data===obj
shili.$watch('foo', function(newValue,oldValue) {
	console.log("sa");
	console.log(newValue);
	console.log(oldValue);
})

new Vue({
	data:{
		a:1
	},
	created: function() {	
		console.log('a is' + this.a	);
	}
})