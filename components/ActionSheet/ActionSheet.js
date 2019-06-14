// components/ui/ActionSheet/ActionSheet.js
class Deferred {
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.reject = reject
      this.resolve = resolve
    })
  }
}
let onChooseItem
Component({
  data: {
    open: false,
    options: []
  },
  methods: {
    catchAll () {},
    async showActionSheet (options) {
      this.setData({ options, open: true })
      onChooseItem = new Deferred()
      const value = await onChooseItem.promise
      this.setData({ open: false })
      if (value === 'cancel') {
        throw Error('cancel')
      }
      return value
    },
    hideActionSheet ({ currentTarget: { dataset: { value } } }) {
      onChooseItem.resolve(value)
    }
  }
})
