import * as Yup from 'yup'

const validationSchema = Yup.object({
  key_word: Yup.string(),
  city: Yup.string().required('請輸入'),
  category: Yup.string().required('請輸入'),
})

export default validationSchema
