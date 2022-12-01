import { /*Formik*/ useFormik } from 'formik';

import validationSchema from './validations';

function Signup() {

    /*

    handleSubmit: onSubmit işlemi için kullanılır 
    handleChange: onChange işlemleri yerinde kullanılır
    * handleBlur: (onBlur) Üzerinde bir şeyler yazdığımız inputtan ayrılır ayrılmaz tetiklenmesini sağlar validation için 
    
    values: initialValues değerlerini kullanmamızı sağlamakta
    errors: inputlarda meydana gelen error mesajlarına ulaşmamızı sağlamaktadır
    touched: Tüm inputlar aynı anda tetiklenmesin diye kullanılır sadece üzerinde işlem yaptığımız inputu aktif kılar 

    NOOT: Eğer hata mesajlarını submit butonuna tıkladığımızda almak istiyorsak handleBlur kaldırmamız yeterlidir
    
    */

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: '',

        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema,   // validation  dosyasıyla burdaki bağlantıyı sağlamaktadır ismi bu şekilde olmalı !!
    });
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="email">Email</label>
                <input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />

                {errors.email && touched.email && <div className='error'>{errors.email}</div>}

                <br />
                <br />

                <label htmlFor="password">Password</label>
                <input name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />

                {errors.password && touched.password && <div className='error'>{errors.password}</div>}

                <br />
                <br />

                <label htmlFor="passwordConfirm">Password Confirm</label>
                <input name='passwordConfirm' value={values.passwordConfirm} onChange={handleChange} onBlur={handleBlur} />

                {errors.passwordConfirm && touched.passwordConfirm && <div className='error'>{errors.passwordConfirm}</div>}

                <br />
                <br />

                <button type="submit">Submit</button>

                <br />
                <br />

                <code>{JSON.stringify(values)}</code>
            </form>
        </div>
    )
}

export default Signup