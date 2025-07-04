// schemaTypes/weekMenu.js
//
// Skjema for ukemenyen – med låst ukedag + ukedag som overskrift
// --------------------------------------------------------------

export default {
  name:  'weekMenu',
  title: 'Ukemeny',
  type:  'document',

  /* --------------------------------- FELTENE --------------------------------- */
  fields: [
    /* Ukedag – settes ved opprettelse og er deretter skrivebeskyttet */
    {
      name: 'day',
      title: 'Ukedag',
      type:  'string',
      options: {
        list: [
          { value: 'monday',    title: 'Mandag'    },
          { value: 'tuesday',   title: 'Tirsdag'   },
          { value: 'wednesday', title: 'Onsdag'    },
          { value: 'thursday',  title: 'Torsdag'   },
          { value: 'friday',    title: 'Fredag'    },
        ]
      },
      initialValue: 'monday',                   // foreslått verdi ved ny post
      readOnly:   ({document}) => !!document._id, // låses når dokumentet er lagret
      validation: Rule => Rule.required()
    },

    /* Navn på retten */
    {
      name: 'title',
      title: 'Navn på rett',
      type: 'string',
      validation: Rule => Rule.required()
    },

    /* Beskrivelse */
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'text'
    },

    /* Allergener som tag-liste */
    {
      name: 'allergens',
      title: 'Allergener',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' }
    },

    /* Bilde */
    {
      name: 'image',
      title: 'Bilde',
      type:  'image',
      options: { hotspot: true }
    },

    /* Pris */
    {
      name: 'price',
      title: 'Pris (kr)',
      type:  'number',
      validation: Rule => Rule.required().min(0)
    }
  ],

  /* ----------------------------- PREVIEW I LISTEN ----------------------------- */
  preview: {
    select: {
      day:   'day',
      title: 'title'
    },
    prepare({ day, title }) {
      const label = {
        monday:    'Mandag',
        tuesday:   'Tirsdag',
        wednesday: 'Onsdag',
        thursday:  'Torsdag',
        friday:    'Fredag'
      }[day] || day;

      return {
        title:    label,  // vis ukedagen som hovedtittel
        subtitle: title   // retten som undertittel
      };
    }
  }
};
