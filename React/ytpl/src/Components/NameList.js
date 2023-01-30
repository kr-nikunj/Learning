import React from 'react'
import Person from './person'

function NameList() {
    const names = [
        'John',
        'Jane',
        'Mary',
        'Mike',
        'John']

        const person = [{
            id:1,
            name: 'John',
            age: 20,
            skill: 'JavaScript'
        },
        {
            id:2,
            name: 'Jane',
            age: 30,
            skill: 'React'
        },
        {
            id:3,
            name: 'Mary',
            age: 40,
            skill: 'React'
        }]
        const PersonList = person.map(person =>(
            <Person person={person}/>
        ))

        const NameList = names.map((names,index) => <h2 key={index}>{index} {names}</h2>)

  return (
    <div>
         {/* NameList.map(name => <h2>{name}</h2>) */}
        {/* {PersonList} */}
        
        {NameList}
        </div>
  )
}

export default NameList