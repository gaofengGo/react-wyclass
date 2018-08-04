import { connect } from 'react-redux'
import My from '@/components/my/My'
import { LoginOut } from '@/redux/actions'

const mapStateToProps = (state) => ({
    loginStatus: state.loginStatus
})
const mapDispatchToProps = (dispatch) => ({
    LoginOut: (status) => {
        dispatch(LoginOut(status))
    },
})
export default connect(mapStateToProps,mapDispatchToProps)(My)