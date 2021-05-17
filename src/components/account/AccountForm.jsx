import React, { useEffect, useState } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { createUser } from '../../graphql/mutations'
import { getUserByEmail } from '../../graphql/queries'

const initialState = { name: '', email: '' }

const AccountForm = () => {
  const [formState, setFormState] = useState(initialState)
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchUsers() {
    try {
        const user = Auth.currentUserInfo();
        console.log(user);
        const userData = await API.graphql(graphqlOperation(getUserByEmail, {email: "chase.parks94@gmail.com"}))
        console.log(userData);
        // const users = userData.data.listUsers.items;
        // console.log(users);
        // setUsers(users)
    } catch (err) { console.log(err) }
  }

  async function addUser() {
    try {
      if (!formState.name) return
      const user = { ...formState }
      setUsers([...users, user])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createUser, {input: user}))
    } catch (err) {
      console.log('error creating user:', err)
    }
  }

  return (
    <div style={styles.container}>
      <h2>Users</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name} 
        placeholder="Name"
      />
      <input
        onChange={event => setInput('email', event.target.value)}
        style={styles.input}
        value={formState.email} 
        placeholder="Email"
      />
      <button style={styles.button} onClick={addUser}>Create User</button>
      {
        users.map((user, index) => (
          <div key={user.id ? user.id : index} style={styles.user}>
            <p style={styles.userName}>{user.name}</p>
            <p style={styles.userName}>{user.email}</p>
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' },
  hr: { width: '100%', height: 1 }
}

export default withAuthenticator(AccountForm)