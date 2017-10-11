import axios from 'axios';

export function changeProfileHeader(data) {

return({
type: 'CHANGE_HEADER',
payload: data,
})

};

export function deleteEmployee(id , callback) {

const ROOT_URL = 'https://boiling-castle-58075.herokuapp.com/employee/emp';


return function(dispatch) {

 axios.delete(`${ROOT_URL}/${id}`)
.then(response => {
dispatch({
    type: 'DELETE_POST',
    payload: id
  })

//callback();
})

}


};

export function fetchPosts() {
console.log('called');

 return function(dispatch) {
axios.get('https://boiling-castle-58075.herokuapp.com/employee/emp')
.then(response => {
dispatch({
	 type: 'GET_USER',
     payload: response.data.docum,
})

});
 }

};