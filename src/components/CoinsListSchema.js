import * as Yup from 'yup';
//sin espacios
const regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{3,25}$/
// caracters repetido 3 minimo 
const regex2 = /^(?:([\w\d])\1{0,2}(?!\1))+$/

const CoinsListSchema = () => {
  return Yup.object({
    name: Yup.string()
    .min(2, 'min 3 chars')
    .max(25, 'max 25 chars')
    .matches(regex, `Debe contener al
        menos 1 minus, 1 mayus, y 1 número`)
    .test('test', 'ningún caracter puede repetirse 4 o más veces seguidas.', (item)=> {
        return regex2.test(item)
    })
    .required('Required'),
  })
};

export default CoinsListSchema