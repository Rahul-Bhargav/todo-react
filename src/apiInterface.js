const api = {
  readTasks: function () {
    return fetch(`http://localhost:8080/read`, {method: 'get'})
  },

  updateAll: function (status) {
    const isValid = this.checkValidity(1, 'test', status)
    if (isValid !== true) return isValid
    const data = {
      status: status
    }
    return fetch(`http://localhost:8080/updateall`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  },

  updateTask: function (id, description, status) {
    const isValid = this.checkValidity(id, description, status)
    if (isValid !== true) return isValid

    const data = {
      status: status,
      task: description
    }
    return fetch(`http://localhost:8080/update/${id}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  },

  insertTask: function (description) {
    const isValid = this.checkValidity(1, description, true)
    if (isValid !== true) return isValid

    return fetch(`http://localhost:8080/write/${description}`, { method: 'post' })
  },

  deleteTask: function (id) {
    const isValid = this.checkValidity(id, 'description', false)
    if (isValid !== true) return isValid
    return fetch(`http://localhost:8080/destroy/${id}`, { method: 'delete' })
  },

  deleteCompleted: function () {
    return fetch(`http://localhost:8080/destroycompleted`, { method: 'delete' })
  },
  checkValidity: function (id, description, status) {
    if (isNaN(parseInt(id, 10))) return `id-${id} is not a number`

    if (typeof description !== 'string') return `description-${description} is not a string`

    if (typeof status !== 'boolean') return `status given is not a boolean`

    return true
  }
}

export default api
