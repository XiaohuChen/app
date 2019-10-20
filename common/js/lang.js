export default{
	data(){
		return{
				langs:getApp().globalData.lan,
				choice:getApp().globalData.choice
		}
	},
	computed:{
		lan(){
			return this.langs[this.choice.value]
		}
	},
}