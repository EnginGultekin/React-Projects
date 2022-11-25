import PropTypes from "prop-types"

function User({ name, surname, isLoggedIn, age, friends, address }) {

    if (!isLoggedIn) {
        return <h1>Giriş Yapmadınız Yapın</h1>
    }

    return (
        <>
            <h1> {`${name} ${surname} (${age})`} </h1>

            {`Yer: ${address.title},  Zip: ${address.zip}`}

            <br /><br />

            {friends && friends.map((friend) =>
                <div key={friend.id}>
                    {friend.id}- {friend.name}
                </div>)
            }
        </>
    );
}

// PropTypes gelen propların tiplerinin ne olması gerektiğini söylememizi sağlayan bir şeydir
// Eğer herhangi biri burda tanımlı tipler dışından bir tipte yollanırsa hata alırız
User.propTypes = {
    // Bu tipleri 'isRequired' yazarak zorunlu hale getirebiliriz
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    name: 'İsimsiz',
    surname: '',
    isLoggedIn: false,

}

export default User




{/* ------------ 1 ------------
function User(props) {
    console.log(props)
    return (
        <h1>
            {props.isLoggedIn
                ? `${props.name} ${props.surname}`
                : 'Giriş Yapmadınız'
            }
        </h1>
    );
}
*/}