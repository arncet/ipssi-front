import React from 'react'
import {getPath} from '../utils/routes'
import {getUserAvatar} from '../utils/users'
import Link from './commons/Link'

const News = ({news, user}) => (
  <div className='News_page'>
    <h1 className='News_title'>{news.title}</h1>
    <div className='News_description'>{news.description}</div>
    <div className='News_content' dangerouslySetInnerHTML={{__html: news.content}}/>
    <div className='News_user'>
      <div style={{backgroundImage: `url('${getUserAvatar(user)}')`}} className='News_user_avatar'/>
      <Link href={getPath('profile-id', {id: user.id})}><div className='News_user_name'>{`${user.lastName} ${user.firstName}`}</div></Link>
    </div>
  </div>
)

export default News
