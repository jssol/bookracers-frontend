import './Signup.css';

const Signup = () => {
    return (
        <div className='signup'>
            <h3>Sign Up</h3>
            <form>
               <input type={'name'} placeholder={'Name'} />
                <input type={'email'} placeholder={'Email'} />
                <input type={'password'} placeholder={'Password'} />
                <input type={'password'} placeholder={'confirm-Password'} />

                <button type={'email'}>Login</button>
            </form>
        </div>
    );
}

export default Signup