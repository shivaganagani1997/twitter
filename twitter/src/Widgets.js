import React from 'react'
import './Widgets.css'
import{
TwitterShareButton,
TwitterTweetEmbed} from 'react-twitter-embed'
import Search from '@mui/icons-material/Search'

function Widget() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <Search 
        className='widgets__SearchIcon'
        />
        <input placeholder='Search Twitter' type= 'text' />
      </div>
      <div className='widgets__widgetContainer'>
        <h2>Whats's happening</h2>
  
      <TwitterTweetEmbed tweetId=
      {'1535470656116035584'} />
      <TwitterTweetEmbed
      sourceType = 'profile'
      screenName='smitha Sabharwal'
      options={{height:400}}
      />
      <TwitterShareButton
      Url={'https://www.facebook.com/shivaGanagani'} 
      options = {{text:'shiva'}}
      />
      </div>
    </div>
  )
}

export default Widget