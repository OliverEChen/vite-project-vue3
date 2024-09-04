import { defineStore } from 'pinia'
const useSettingStore = defineStore('setting', {
  state: () => {
    return {
      isCollapse: false, // 折叠菜单
      refresh: false,
    }
  },
  actions: {},
})
export default useSettingStore
