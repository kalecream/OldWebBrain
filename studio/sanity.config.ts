import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'YungHigueWebsite',

  projectId: 'hm7cnqna',
  dataset: 'microlog',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
