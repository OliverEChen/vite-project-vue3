import { defineStore } from 'pinia'
import { ref } from 'vue'
const useSettingStore = defineStore('setting', {
  state: () => {
    return {
      isCollapse: ref(false),
    }
  },
  actions: {},
})
export default useSettingStore
