import React from 'react'
// import Person from './Person'
function NameList() {
    const names=['Chandra','siva','Ramesh']
    // const persons=[
    //     {
    //         id:1,
    //         name:'Chandra',
    //         age:30,
    //         skill:'react'
    //     },
    //     {
    //         id:2,
    //         name:'siva',
    //         age:23,
    //         skill:'Python'
    //     },
    //     {
    //         id:3,
    //         name:'Ramesh',
    //         age:45,
    //         skill:'Testing'
    //     },
    // ]
   // const personsList=persons.map(person=> <Person key={person.id} person={person}/>)
    
    const nameList=names.map((name,index)=> <h2 key={index}>{index} {name}</h2> )

  return (
    <div>
    <table align="center" border ="1">
      <tr>
        <th>Id</th>
        <th>Name</th>
      </tr>
      {
        names.map((name, index) =><tr>
          <td key={index}>{index}</td>
          <td>{name}</td>
        </tr>)
      }
    </table>

    </div>
  )
}

export default NameList
