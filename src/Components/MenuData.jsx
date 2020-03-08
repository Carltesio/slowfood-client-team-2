import React, { Component } from 'react'
import { saveData } from "../modules/FoodIndex";


class MenuData extends Component {

    state = {
         menuItem: []    
    }

    componentDidMount() {
        this.getMenuItem()
        {
            let result = await saveData();
            this.setState({menuItem: result.data.products. }) () => {
                this.props.indexUpdated();
            })
        }
    }

   

    render() {
        const menuItem = this.state.menuItems
        let dataIndex;
        if (this.state.menuItem != null) {
            dataIndex = (
                <>
                    {this.state.menuItem.map(menuItem => {
                        return (
                            <div key={menuItem.id}>
                                {menuItem.name}ddkdkdk {menuItem.price}
                            </div>
                        );
                    }
                    )}
                </>
            )
        }

        const name = []
        const price = []
        if (this.state.menuItem != null) {
            this.state.menuItem.forEach(entry => {
                name.push(menuItem.name)
                price.push(menuItem.price)
            })
        }



        return (
            <div>
               <h1>hello</h1>
            </div>
        )

    }

}
export default MenuData;