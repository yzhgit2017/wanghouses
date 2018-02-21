(function($){
        $.fn.drag = function(){
            return this.each(function(){
            	var startX = 0, startY = 0; //触摸开始时手势横纵坐标 		       	      
		        var oPosition = {}; //触点位置		        
		        var self = $(this);
		        var ol = parseInt(self.css('left'));
		        var ot = parseInt(self.css('top'));
		        //获取触点位置
		        function touchPos(e){
		            var touches = e.changedTouches, l = touches.length, touch, tagX, tagY;
		            for (var i = 0; i < l; i++) {
		                touch = touches[i];
		                tagX = touch.clientX;
		                tagY = touch.clientY;
		            }
		            oPosition.x = tagX;
		            oPosition.y = tagY;
		            return oPosition;
		        }
		        //触摸开始
		        function touchStartFunc(e){
		            touchPos(e);
		            startX = oPosition.x;
		            startY = oPosition.y;
		            ol = parseInt(self.css('left'));
		            ot = parseInt(self.css('top'));	            	         
		        }
		        //触摸移动 
		        function touchMoveFunc(e){
		            touchPos(e);
		            var moveX = oPosition.x - startX;
		            var moveY = oPosition.y - startY;
		            self.css('left',ol+moveX);
		            self.css('top',ot+moveY);
		        }
		        // 触摸结束
		        function touchEndFunc(e){
		            touchPos(e);
		            var moveX = oPosition.x - startX;
		            var moveY = oPosition.y - startY;
		           
		        }
		        self.get(0).addEventListener('touchstart', touchStartFunc, false);
		        self.get(0).addEventListener('touchmove', touchMoveFunc, false);
		        self.get(0).addEventListener('touchend', touchEndFunc, false);		          
            })
        }
    })(jQuery)