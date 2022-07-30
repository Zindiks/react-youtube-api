import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';





class App extends React.Component{


  state = {
    videos: [],
    selectedVideo: null,
    flag: ''


  }



  onSearchSubmit = async (term)=>{

    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
      flag: response.data.regionCode
    })




    
  }


  onVideoSelect = (video)=>{
    this.setState({selectedVideo: video})


  }

  render(){
    return ( 
    <div className='ui container '> 
    <i className={`${this.state.flag.toLowerCase()} massive flag`} />


      <SearchBar onSubmit={this.onSearchSubmit}/>
      <h1>{this.state.videos.length} videos loaded</h1>

      <div className='ui grid'>
        <div className='ui row'>
          <div className='ten wide column'>
            <VideoDetail video={this.state.selectedVideo}/>

          </div>

          <div className='six wide column'>
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
          </div>



        </div>


      </div>

 
          
        
        
        

        
        

        


    
    </div>
    

    )


  }


}



export default App;