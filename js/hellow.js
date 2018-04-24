var app =  new Vue({
	el: '#app',
	data: {
		message:'Hello Vue!'
	}
}
)

var app1 = new Vue({
	el : '#app-1',
	data: {
		seen : true
	}
})

 var app2 = new Vue({
	el: '#app-2',
	data: {
		lists: [
			{list: 'aasd' },
			{list: 'b234' },
			{list: 'cfasd'}
		]
	}
}) 

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})