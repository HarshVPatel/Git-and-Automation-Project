"use strict";var Enemy=function(e,n,t){this.x=e,this.y=n,this.speed=t,this.sprite="images/enemy-bug.png"},enemy1=new Enemy(-100,60,20),enemy2=new Enemy(-350,140,35),enemy3=new Enemy(-20,220,50),enemy4=new Enemy(-250,310,25),allEnemies=[enemy1,enemy2,enemy3,enemy4];Enemy.prototype.update=function(e){this.x=this.x+this.speed*player.level*e,510<=this.x&&(this.x=-40),player.x<this.x+80&&this.x<player.x+80&&player.y<this.y+60&&this.y<60+player.y&&(player.x=200,player.y=400)},Enemy.prototype.render=function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)};var Player=function(e,n){this.x=e,this.y=n,this.level=1,this.sprite="images/char-cat-girl.png"};Player.prototype.update=function(){player.y<0&&(this.x=200,this.y=400,player.level++,document.querySelector(".round").textContent=player.level)},Player.prototype.render=function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)},Player.prototype.handleInput=function(e){"left"==e&&0<this.x&&(this.x-=105),"right"==e&&this.x<350&&(this.x+=105),"up"==e&&0<this.y&&(this.y-=85),"down"==e&&this.y<400&&(this.y+=85)};var player=new Player(200,400);document.addEventListener("keyup",function(e){player.handleInput({37:"left",38:"up",39:"right",40:"down"}[e.keyCode])});var Engine=function(e){var t,n=e.document,i=e.window,r=n.createElement("canvas"),a=r.getContext("2d");function s(){var n,e=Date.now();n=(e-t)/1e3,allEnemies.forEach(function(e){e.update(n)}),player.update(),function(){var e,n,t=["images/water-block.png","images/stone-block.png","images/stone-block.png","images/stone-block.png","images/grass-block.png","images/grass-block.png"];for(a.clearRect(0,0,r.width,r.height),e=0;e<6;e++)for(n=0;n<5;n++)a.drawImage(Resources.get(t[e]),101*n,83*e);allEnemies.forEach(function(e){e.render()}),player.render()}(),t=e,i.requestAnimationFrame(s)}r.width=505,r.height=606,n.body.appendChild(r),Resources.load(["images/stone-block.png","images/water-block.png","images/grass-block.png","images/enemy-bug.png","images/char-cat-girl.png"]),Resources.onReady(function(){t=Date.now(),s()}),e.ctx=a}(void 0);!function(){var t={},i=[];function n(e){if(t[e])return t[e];var n=new Image;n.onload=function(){t[e]=n,r()&&i.forEach(function(e){e()})},t[e]=!1,n.src=e}function r(){var e=!0;for(var n in t)t.hasOwnProperty(n)&&!t[n]&&(e=!1);return e}window.Resources={load:function(e){e instanceof Array?e.forEach(function(e){n(e)}):n(e)},get:function(e){return t[e]},onReady:function(e){i.push(e)},isReady:r}}();