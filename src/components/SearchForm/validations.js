import * as Yup from 'yup'

const validationSchema = Yup.object({
  key_word: Yup.string(),
  city: Yup.string(),
  category: Yup.string(),
})

export default validationSchema
