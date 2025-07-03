// schemaTypes/weekMenu.js

export default {
  name: 'weekMenu',            // intern nøkkel
  title: 'Ukemeny',            // vises i Studio-listen
  type: 'document',
  fields: [
    {
      name: 'day',
      title: 'Ukedag',
      type: 'string',
      options: {
        list: [
          { value: 'monday',    title: 'Mandag' },
          { value: 'tuesday',   title: 'Tirsdag' },
          { value: 'wednesday', title: 'Onsdag' },
          { value: 'thursday',  title: 'Torsdag' },
          { value: 'friday',    title: 'Fredag' },
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Navn på rett',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Bilde',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'price',
      title: 'Pris (kr)',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    }
  ]
}
