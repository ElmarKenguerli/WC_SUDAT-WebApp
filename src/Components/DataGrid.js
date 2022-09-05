import React, { Component } from 'react'

class DataGrid extends Component {

   constructor(props) {

      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor

      this.state = { //state is by default an object

         students: [

            { id: 1, name: 'deepak', age: 21, email: 'deepak@email.com' },

            { id: 2, name: 'arsad', age: 19, email: 'arsad@email.com' },

            { id: 3, name: 'raman', age: 16, email: 'raman@email.com' },

            { id: 4, name: 'ajeet', age: 25, email: 'ajeet@email.com' }

         ]

      }

   }

   render() { //Whenever our class runs, the render method will be called automatically. It may have already been defined in the constructor behind the scene.

      return (

         <div>

            

         </div>

      )

   }

}

export default DataGrid 