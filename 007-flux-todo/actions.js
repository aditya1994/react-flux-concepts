/** Actions */

var TodoActions = Flux.createActions({
    addRecipe: function(text){
       return {
          actionType: "ADD_TODO",
          text: text
       }
    },

    removeRecipe: function(text){
    	return {
	   actionType: "REMOVE_TODO",
	}
    }
    kittenLaunch: function(data){
        return {
            actionType: "KITTEN_LAUNCH",
            data: data
        }
    }
});
