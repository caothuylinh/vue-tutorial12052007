import Vue from 'vue'
import data from '../assets/json/sampleblog.json'

window.Vue = Vue

export default {
  methods: {
    fetch (STORAGE_KEY) {
      const data = JSON.parse (localStorage.getItem (STORAGE_KEY) || '[]')
      return data
    },
    save (STORAGE_KEY, data) {
      localStorage.setItem (STORAGE_KEY, JSON.stringify (data))
    },
    saveUser (userData) {
      const STORAGE_KEY_USER = 'STORAGE_KEY_USER'
      this.save (STORAGE_KEY_USER, userData)
    },
    fetchUser () {
      const STORAGE_KEY_USER = 'STORAGE_KEY_USER'
      return this.fetch (STORAGE_KEY_USER)
    },
    saveData (jsonData) {
      const STORAGE_KEY_DATA = 'STORAGE_KEY_DATA'
      this.save (STORAGE_KEY_DATA, jsonData)
    },
    fetchData () {
      const STORAGE_KEY_DATA = 'STORAGE_KEY_DATA'
      return this.fetch (STORAGE_KEY_DATA).length !== 0 ? this.fetch (STORAGE_KEY_DATA) : data
    },
    clearStorage () {
      localStorage.clear ()
    }
  }
}
