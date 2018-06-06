// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
    ingredients: ['meat', 'fruit', 'cookies'],
    people: [
      {name: 'Quentin', age: 73, favColor: 'grey'},
      {name: 'Nicole', age: 70, favColor: 'burgundy'},
    ]
	}
})