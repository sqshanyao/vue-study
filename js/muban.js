var mb = new Vue({
	el: '#mm',
	data:{
		rawHtml:'<span style="color:red">this should be red.</span>'	

	}
})

var bu = new Vue({
	el:'#bb',
	data:{
		but:'false'
	}
})

function show() {
	alert('a');
}

var jsj = new Vue({
	el:'#jsj-1',
	data: {
		message : 'Hello'
	},
	computed: {
		reversedMessage1: function() {
			return this.message.split('').reverse().join('')
		}
	},
	methods: {
		reversedMessage: function() {
			return this.message.split('').reverse().join('')
		}
	}
})