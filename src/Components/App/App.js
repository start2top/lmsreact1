import './App.css';
import { Component } from 'react';
import Person from '../person/person';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {id:1, name: 'Alvin', phone: '440234324', career: 'IT', email: '123123@mail.ru', meeting: '20-12 - 12:00'},
        {id:2, name: 'Mark', phone: '213442134', career: 'Banking', email: '1232134@mail.ru', meeting: '20-12 - 14:00'},
        {id:3, name: 'Dave', phone: '343242134', career: 'HR', email: '5434534@mail.ru', meeting: ''},
        {id:4, name: 'Vladislav', phone: '1234543122', career: 'Real Estate', email: '564564@mail.ru', meeting: ''},
      ]
    }
  }
  onValueChange = (id, value) => {
    this.setState(({data}) => {
    const item = data.find(item => item.id === id)
    const newItem = {...item, meeting: value}
    const index = data.indexOf(item)
    const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1, data.length)]
    return {
      data: newData
    }
    })
  }
  render() {
    const {data} = this.state
    const personList = data.map(item => {
      return <Person {...item} key={item.id} onValueChange={(id, value) => this.onValueChange(id, value)}/>
    })
    return (
      <table className='responsive-table'>
          <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Career</th>
                <th>Email</th>
                <th>Meeting</th>
            </tr>
          </thead>
          <tbody>
            {personList}
          </tbody>
        </table>
    );
  }
}

export default App;
