import { default as component } from './EditorToolbar.vue'
import { components } from '@cortezaproject/corteza-vue'
const { checkbox } = components.C3.controls

const props = {
  backLink: {
    name: 'report.list',
  },
  hideDelete: false,
  deleteDisabled: false,
  saveDisabled: false,
  processing: false,
}

export default {
  name: 'EditorToolbar',
  component,
  props,

  controls: [
    checkbox('Hide delete', 'hideDelete'),
    checkbox('Delete disabled', 'deleteDisabled'),
    checkbox('Hide save', 'hideSave'),
    checkbox('Save disabled', 'saveDisabled'),
    checkbox('Processing', 'processing'),
  ],

  scenarios: [
    {
      label: 'Full form',
      props,
    },
    {
      label: 'Empty form',
      props: {
        ...props,
        hideDelete: true,
        deleteDisabled: true,
        saveDisabled: true,
      },
    },
  ],
}
