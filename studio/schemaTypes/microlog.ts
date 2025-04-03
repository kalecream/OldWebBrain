export default {
  name: 'microlog',
  title: 'Microlog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title (Optional)',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 8,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'video',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*', // Allows MP4, MOV, etc.
      },
    },
    {
      name: 'videoUrl',
      title: 'Video URL (YouTube/Vimeo)',
      type: 'url',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'content',
      media: 'image',
    },
  },
}
