<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Vue Runtime Template Compiler</a>
      <form class="form-inline ml-auto mb-0">
        <button class="btn btn-outline-light" @click.prevent="addUser">
          <i class="fas fa-plus"></i>
          Add new user
        </button>
      </form>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col">
          <runtime-template-compiler :template="template" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import faker from 'faker'
import moment from 'moment'
let id = 0

function makeUsers(number = 1) {
  return Array(number)
    .fill(null)
    .map(() => {
      const firstName = faker.name.firstName()
      const lastName = faker.name.lastName()
      const email = faker.internet.email(firstName, lastName)
      const created = faker.date.past()
      return { firstName, lastName, email, created, id: id++ }
    })
}

export default {
  filters: {
    formatDate(value) {
      return moment(value).format('DD/MM/YYYY - hh:mma')
    }
  },
  props: {
    pageTitle: {
      type: String,
      default: 'Manage Users'
    }
  },
  data() {
    return {
      users: [...makeUsers(4)],
      parent: this,
      template: /* html */ `
        <div class="pt-5">
          <h2>{{ pageTitle }}</h2>
          <table class="table table-striped table-bordered table-hover">
            <caption>{{ totalUsers }}</caption>
            <thead class="thead-dark">
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Eamil Address</th>
                <th>Created</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(user, index) in users">
                <tr :key="index">
                  <td>{{ user.id }}</td>
                  <td>{{ user.firstName }}</td>
                  <td>{{ user.lastName }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.created | formatDate }}</td>
                  <td>
                    <a class="text-danger" @click.prevent="removeUser(user)">
                      <i class="fas fa-trash"></i>
                    </a>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      `
    }
  },
  computed: {
    totalUsers() {
      return `There are ${this.users.length} users in total`
    }
  },
  methods: {
    addUser() {
      const [user] = makeUsers()
      this.users.push(user)
    },
    removeUser(user) {
      this.users = this.users.filter((i) => i.id !== user.id)
    }
  }
}
</script>
