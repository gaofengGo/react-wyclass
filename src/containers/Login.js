import { connect } from 'react-redux'
import Login from '@/components/login/Login'
import { LoginIn } from '@/redux/actions'

const mapDispatchToProps = (dispatch) => ({
    LoginIn: (status) => {
        dispatch(LoginIn(status))
    },
})

export default connect(null,mapDispatchToProps)(Login)