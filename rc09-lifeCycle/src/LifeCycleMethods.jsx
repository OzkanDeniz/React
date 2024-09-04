import React from 'react'



  
 class LifeCycleMethods extends React.Component{
//! 1- componentin oluşturulmasında çağrılır
constructor(props) {
  console.log("constructor is running");
  super(props);

  this.state = {
    count: 0
  };
}



arttir =()=>{

  this.setState({count: this.state.count+1})

}

  //!2- her oluşturmada çağırılır (bileşeni DOM a çizme)
  render() {
    console.log("component rendered");
    return (
      <div className="container text-center p-3">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT = {this.state.count} </h3>
        <button onClick={this.arttir} className="btn btn-info" >
          İNC
        </button>
      </div>
    );
  }











 }
export default LifeCycleMethods;