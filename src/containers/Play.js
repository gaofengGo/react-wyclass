import { connect } from 'react-redux'
import { removeVideo, addVideo } from '@/redux/actions'
import Play from '@/components/play/Play'

const mapStateToProps = (state) => ({
    id: state.id,
    videos: state.videos,
    login: state.loginStatus
})

const mapDispatchToProps = (dispatch) => ({
    
    addVideo: (up) => {
        dispatch(addVideo(up))
    },
    removeVideo: (up) => {
        dispatch(removeVideo(up))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Play);