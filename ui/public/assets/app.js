App.Views.Home=Backbone.View.extend({el:"body",template:JST["templates/home.jst"],render:function(){return this.$el.html(this.template()),this}}),App.Router=Backbone.Router.extend({routes:{"":"index"},index:function(){this.homeView=this.homeView||new App.Views.Home,this.homeView.render()}}),new App.Router,Backbone.history.start();