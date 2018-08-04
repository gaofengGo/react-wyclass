import { connect } from 'react-redux'
import { changeVideo } from '@/redux/actions'
import MyStudy from '@/components/mystudy/MyStudy'

const mapStateToProps = (state) => ({
    videos: state.videos,
    login: state.loginStatus
})

const mapDispatchToProps = (dispatch) => ({
    changeVideo: (id) => {
        dispatch(changeVideo(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyStudy);