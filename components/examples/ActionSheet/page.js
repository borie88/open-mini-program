Page({
  data: {},
  async onTapButton () {
    const actionSheetOptions = [
      { label: 'First' },
      { label: 'Second' },
      { label: 'Third', disabled: true }
    ]
    const actionSheet = this.selectComponent('#actionSheet')
    try {
      const value = await actionSheet.showActionSheet(actionSheetOptions)
      console.log('value is the index: ', value)
      // do something else now
    } catch (error) {
      console.log('user cancelled!')
    }
  }
})