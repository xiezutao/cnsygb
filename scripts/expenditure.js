var liDoms = document.getElementById("expenditure-nav").children;
			var divDoms = document.getElementsByClassName("list-content")[0].children;
			for(var i=0;i<liDoms.length;i++){
				//绑定自定义属性
				liDoms[i].index = i;
				liDoms[i].onclick = function(){
					var index = this.index;
					//让所有的li的元素class没有
					getSiblings(this,function(obj){
						obj.className = "none";
					});
					//让当前点击的li颜色变成active
					this.className = "active";
					
					//让所有的div的元素隐藏
					getSiblings(divDoms[index],function(obj){
						obj.style.display = "none";
					});
					//对应的div进行显示隐藏
					divDoms[index].style.display = "block";
				}
			}
			
			//获取同辈元素的方法
			function getSiblings(obj,callback){
				//获取父节点
				var parent = obj.parentNode;
				for(var i=0;i<parent.children.length;i++){
					if(obj != parent.children[i]){
						callback(parent.children[i]);
					}
				}
			}