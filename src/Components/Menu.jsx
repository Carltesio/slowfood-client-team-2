// import React from 'react';
// import { getData } from "../modules/menuData";


// class DisplayMenuData extends Component {
//     state = {
//         menuData: null,
//         renderIndex: false
//     }
//     componentDidMount() {
//         this.getMenuData()
//     }
//     componentDidUpdate(prevProps) {
//         if (this.props.updateIndex != prevProps.updateIndex) {
//             this.getMenuData()
//         }
//     }
//     render () {
//         let  menuIndex;
//         if (this.state.menuData != null) {
//             menuIndex = (
//                 <div>
//                     {this.state.menuData.map(item => {
//                       <h1 id="menu">Menu</h1>
//                     return <div key={item.name}> {price}  {id} </div>
//                     })}
//                 </div>
//             )
//         }
//         const name = []
//         const price = []
//         const id = []

//         if (this.state.menuData != null) {          
//           this.state.menuData.forEach(entry => {
//               name.push(entry.data.name)
//               labels.push(entry.data.price)
//           })  
        
//         }
        
//     }
// }
// export default DisplayMenuData;