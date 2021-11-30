import React, { useState } from 'react'
import './App.css'
import contactsArr from './contacts.json'

function App() {
  const [contacts, setContacts] = useState(contactsArr.slice(0, 5))

  // Add Random
  const random = () => {
    const newArr = [...contacts]

    newArr.push(contactsArr[Math.floor(Math.random() * contactsArr.length)])
    setContacts(newArr)
  }

  // Sort by Name
  const sortByName = () => {
    const newArr = [...contacts]

    newArr.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
    setContacts(newArr)
  }

  // Sort by category
  const sortByCategory = () => {
    const newArr = [...contacts]

    newArr.sort((a, b) => b.popularity - a.popularity)
    setContacts(newArr)
  }

  // Delete contact
  const deleteContact = (id) => {
    const contactsFilter = contacts.filter((contact) => contact.id !== id)
    setContacts(contactsFilter)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <h1>Iron Contacts </h1>
          <button
            onClick={() => {
              random()
            }}
          >
            Add Random Contact
          </button>
          <button
            onClick={() => {
              sortByName()
            }}
          >
            Sort By Name
          </button>
          <button
            onClick={() => {
              sortByCategory()
            }}
          >
            Sort By Popularity
          </button>
        </div>

        <div>
          <table>
            <tr style={{ padding: '50px' }}>
              <th>Photo</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Oscar</th>
              <th>Emy</th>
              <th>❌</th>
            </tr>
            {contacts.map((contact) => (
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt='' height='100px' />
                </td>
                <td> {contact.name} </td>
                <td> {Math.round(contact.popularity)}</td>
                <td> {contact.wonOscar ? ' 🏆 ' : ' 🏴‍☠️ '} </td>
                <td> {contact.wonEmmy ? ' 🏆 ' : ' 🏴‍☠️ '} </td>
                <td>
                  <button
                    onClick={() => {
                      deleteContact(contact.id)
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </header>
    </div>
  )
}

export default App
