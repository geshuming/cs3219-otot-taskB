<template>
  <div id="app">
    <div class="ui main container">
      <h2> Create a new cotact </h2>
      <b-form inline @submit="onSubmit">
        <b-form-input
          v-model="form.name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Name"
        ></b-form-input>

        <b-form-input 
          v-model="form.email"
          class="mb-2 mr-sm-2 mb-sm-0" 
          placeholder="Email"
        ></b-form-input>

        <b-form-input 
          v-model="form.phone"
          type="number"
          class="mb-2 mr-sm-2 mb-sm-0" 
          placeholder="Phone number"
        ></b-form-input>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>

      <br>

      <b-table :items="data" :fields="fields" responsive bordered striped hover show-empty>
          <template #empty>No contacts yet.</template>

          <template #cell(name)="row">
            <b-form-textarea
              v-model="row.item.name"
              size="sm"
              rows="1"
              no-resize
            ></b-form-textarea>
          </template>
          <template #cell(email)="row">
            <b-form-textarea
              v-model="row.item.email"
              size="sm"
              rows="1"
              no-resize
            ></b-form-textarea>
          </template>
          <template #cell(phone)="row">
            <b-form-textarea
              v-model="row.item.phone"
              size="sm"
              rows="1"
              no-resize
              number=true
            ></b-form-textarea>
          </template>

          <template #cell(actions)="row">
            <b-button
              variant="success"
              size="sm"
              @click="updateContact(row.item.id, {
                name: row.item.name,
                email: row.item.email,
                phone: row.item.phone
              })"
              class="mr-2"
            >
              <i class="el-icon-delete"></i><span class="d-none d-md-inline ml-2">Update</span>
            </b-button>
            <b-button
              variant="danger"
              size="sm"
              @click="deleteContact(row.item.id)"
              class="mr-2"
            >
              <i class="el-icon-delete"></i><span class="d-none d-md-inline ml-2">Delete</span>
            </b-button>
          </template>
        </b-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "querystring";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export default {
  name: "App",
  data() {
    return {
      api: "https://cs3219-taskb-backend.herokuapp.com/api/contacts",
      data: [],
      fields: [
        "id",
        "name",
        "email",
        "phone",
        "actions"
      ],
      form: { 
        name: "", 
        email: "", 
        phone: 0,
      },
    };
  },
  methods: {
    getContacts() {
      axios
        .get(this.api)
        .then((data) => {
          this.data = data.data.data;
        })
        .catch((e) => {
          alert(e);
        });;
    },
    deleteContact(id) {
      axios
        .delete(`${this.api}/${id}`)
        .then(() => {
          this.getContacts();
        })
        .catch((e) => {
          alert(e);
        });
    },
    createContact(formData) {
      axios
        .post(this.api, qs.stringify(formData), config)
        .then(() => {
          this.getContacts();
        })
        .catch((e) => {
          alert(e);
        });
    },
    updateContact(id, formData) {
      axios
        .put(`${this.api}/${id}`, qs.stringify(formData), config)
        .then(() => {
          this.getContacts();
          alert("Success");
        })
        .catch((e) => {
          alert(e);
        });
    },
    onSubmit() {
      this.createContact(this.form);
    }
  },
  created() {
    this.getContacts();
  },
};
</script>

<style>
.app {
  margin-left: auto;
  margin-right: auto;
  padding-left: 1em;
  padding-right: 1em;
  max-width: 768px;
}
</style>