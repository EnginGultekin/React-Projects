import * as yup from 'yup';

/*
  Burada verdiğimiz email: password: keyleri initialValue
  kısmında tanımlamış olduğumuz keylerdir bu şekilde tanıyor 
*/

let validations = yup.object().shape({
    email: yup
        .string()
        .email('Geçerli bir email giriniz')
        .required('Burası Boş Bırakılamaz'),
    password: yup
        .string()
        .min(5, 'Parola en az 5 karakter olmalıdır')
        .required('Burası Boş Bırakılamaz'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password')], 'Parolanız eşleşmiyor')
        .required('Burası Boş Bırakılamaz')
})

export default validations



/*  Ana Taslak

 email: yup.string().email().required(),
 password: yup.string().min(5).required(),
 passwordConfirm: yup.string().oneOf([yup.ref('password')]).required()

oneOf([yup.ref('password')]) içine verilenle aynı olup olmadığına bakıyor

*/