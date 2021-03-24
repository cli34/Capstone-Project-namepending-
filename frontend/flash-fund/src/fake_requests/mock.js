import axios from "axios"

import MockAdapter from "axios-mock-adapter"

let mock = new MockAdapter(axios)

mock.onPost("/new_campaign", { name: "ian" }).reply((config) => {
  return [200]
})
