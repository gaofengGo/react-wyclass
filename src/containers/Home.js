import { connect } from 'react-redux'
import { showPlayer, changeVideo } from '@/redux/actions'
import Home from '@/components/home/Home'

const mapStateToProps = (state) => ({
    // showStatus: state.showStatus
})

const mapDispatchToProps = (dispatch) => ({
    // showVideoPlayer: (status) => {
    //     dispatch(showPlayer(status))
    // },
    changeVideo: (id) => {
        dispatch(changeVideo(id))
    }
});

export default connect(null, mapDispatchToProps)(Home);