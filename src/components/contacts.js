    import React from 'react'
    import Table from 'react-bootstrap/Table'
    
    const Contacts = ({ contacts }) => {
      return (
        <Table responsive="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
    {contacts.map((contact) => (
          <tr>
            <td>{contact.id_user}</td>
            <td>{contact.firstname_user}</td>
            <td>{contact.lastname_user}</td>
            <td>{contact.login_user}</td>
            <td>{contact.password_user}</td>
            <td><a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Dawaj HAJS!</a></td>
          </tr>
    ))}
        </tbody>
      </Table>
      )
    };
    
    export default Contacts