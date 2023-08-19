import { Rule } from 'postcss'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image of Restaurant',
      type: 'image'
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Enter a rating from (1-5 starts)',
      type: 'number',
      validation:(Rule) =>
      Rule.required()
        .min(1).max(5).error("Please enter value between 1 and 5.")
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      to:[{type:"category"}],
      validation:(Rule) =>Rule.required()
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of:[{type:"reference", to:[{type: "dish"}]}],
      }),

  ],

})
