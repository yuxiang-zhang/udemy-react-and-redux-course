import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.submitSearchTerm('dota');
    }

    submitSearchTerm = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                type: "video",
            },
        });

        this.setState({ videos: response.data.items, 
            selectedVideo: response.data.items[0]
        });
    };

    selectVideo = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmitCallback={this.submitSearchTerm} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                selectVideoCallback={this.selectVideo}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
