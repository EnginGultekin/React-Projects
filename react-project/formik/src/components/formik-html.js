import { /*Formik*/ useFormik } from 'formik';

function FormikHtml() {

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: 'EngLeng',
      lastName: 'LuganHan',
      email: 'engleng@mail.com',
      gender: 'male',
      language: [],
      country: 'Turkey',
    },
    onSubmit: values => {
      console.log(values)
    },
  });

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input name='firstName' value={values.firstName} onChange={handleChange} />

        <br />
        <br />

        <label htmlFor="lastName">Last Name: </label>
        <input name='lastName' value={values.lastName} onChange={handleChange} />

        <br />
        <br />

        <label htmlFor="email">Email: </label>
        <input name='email' value={values.email} onChange={handleChange} />

        <br />
        <br />

        <span>Male </span>
        <input name='gender' value='male' type='radio' onChange={handleChange}
          checked={values.gender == 'male'} />

        <span>Fmale </span>
        <input name='gender' value='female' type='radio' onChange={handleChange}
          checked={values.gender == 'female'} />

        <br />
        <br />

        <div>
          <input name='language' type='checkbox' value='React' onChange={handleChange} />
          React
        </div>
        <div>
          <input name='language' type='checkbox' value='HTML' onChange={handleChange} />
          HTML
        </div>
        <div>
          <input name='language' type='checkbox' value='CSS' onChange={handleChange} />
          CSS
        </div>
        <div>
          <input name='language' type='checkbox' value='Javascript' onChange={handleChange} />
          Javascript
        </div>

        <br />

        <select name='country' value={values.country} onChange={handleChange}>
          <option value='tr'>Turkey</option>
          <option value='en'>England</option>
          <option value='usa'>America</option>
          <option value='fr'>France</option>
          <option value='ch'>China</option>
          <option value='qa'>Qatar</option>
        </select>

        <br />
        <br />

        <button type="submit">Submit</button>

        <br />
        <br />

        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}

export default FormikHtml;
