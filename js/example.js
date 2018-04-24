
var watcExampleVM = new Vue({
	el:'#watch-example',
	data: {
		question:'',
		answer:'I cannot give you an answer until you ask a question!'
	},
	watch: {
		 // 如果 `question` 发生改变，这个函数就会运行
		 question:function(newQuestion,oldQuestion) {
			 this.answer = 'Wating for you to syping...'
			 this.getAnswer()
		 }
	},
	methods: {
		  // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
	getAnswer:_.debounce(
		function() {
			if(this.question.indexOf('?') === -1) {
				this.answer="必须包含问号。:-)"
				return
			}
			this.answer = "Thinking..."
			var vm = this
			axios.get("https://yesno.wtf/api")
			.then(function(response) {
				vm.answer = _.capitalize(response.data.answer)
			})
			.catch(function(error) {
				vm.answer = 'Error Could not reach the API. ' + error
			})
		},
		// 这是我们为判定用户停止输入等待的毫秒数
		500
	   )
	}
})

var test = new Vue ({
	
})