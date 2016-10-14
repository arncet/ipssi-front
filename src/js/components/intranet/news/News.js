import React, {Component} from 'react'
import moment from '../../../utils/moment'
import { capitalize, truncate } from 'lodash'

//Components
import NewsTopbar from './NewsTopbar'
import NewPreview from './NewPreview'

const news = [
  {
    id: 1,
    title: 'Sed ut perspiciatis unde omnis iste', 
    description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque t enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure repreh"',
    content: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
    date: 1476370055409 
  },
  {
    id: 2,
    title: 'Sed ut perspiciatis unde omnis iste', 
    description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque t enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure repreh"',
    content: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
    date: 1476370055409 
  },
  {
    id: 3,
    title: 'Sed ut perspiciatis unde omnis iste', 
    description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque t enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure repreh"',
    content: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
    date: 1476370055409 
  },
  {
    id: 4,
    title: 'Sed ut perspiciatis unde omnis iste', 
    description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque t enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure repreh"',
    content: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
    date: 1476370055409 
  },
  {
    id: 5,
    title: 'Sed ut perspiciatis unde omnis iste', 
    description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque t enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure repreh"',
    content: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
    date: 1476370055409 
  }
]

class NewsIntranet extends Component{
  constructor(props) {
    super(props)
    const currentsId = news.length ? [news[0].id] : []
    this.state = {currentsId}
  }

  render() {
    const {currentsId} = this.state

    return (
      <div className="Intranet_page Intranet_news_page">
        <div className='Intranet_page_header'>
          <h1 className='Intranet_page_title'>Actualités : </h1>
          <NewsTopbar/>
        </div>
        <div className='Intranet_body Intranet_news_body'>
          <div className='New_bullet_line' style={{height: `${(news.length - 1) * 170}px`}}/>
          <ul className='News'>
            {
              news.map((thisNew, i) => {
                return (
                  <New 
                    new={thisNew} 
                    key={i} 
                    current={currentsId.includes(thisNew.id)} 
                    onClick={(e, id) => this.onClick(e, id)}
                    toggle={(e, id) => this.toggleCurrentId(e, id)}
                  />
                )
              })
            }
          </ul>
          <NewPreview/>
        </div>
      </div>
    )
  }

  onClick(e, id) {
    if(e.target.className === 'New_checkbox_label') return
    this.setState({currentsId: [id]})
  }

  toggleCurrentId(e, id) {
    if(e.target !== e.currentTarget) return
    const currentsId = [...this.state.currentsId]
    if(currentsId.includes(id)) {
      const index = currentsId.indexOf(id)
      const newCurrentsId = [
        ...currentsId.slice(0, index),
        ...currentsId.slice(index + 1)
      ]
      this.setState({currentsId: newCurrentsId})
    } else {
      currentsId.push(id)
      this.setState({currentsId})
    }
  }
}

const New = ({new: {id, title, description, date}, current, onClick, toggle}) => (
  <li className={`New_item${current ? ' New_item_current' : ''}`} onClick={(e) => onClick(e, id)}>
    <div className='New_bullet'/>
    {current ? <div className='New_triangle'/> : null}
    <div className='New'>
      <div className='checkbox'>
        <input type='checkbox' checked={current} readOnly/>
        <label className='New_checkbox_label' onClick={(e) => toggle(e, id)}/>
      </div>
      <div className='New_date'>
        <span>{capitalize(moment(date).fromNow())}, </span>
        <span>{moment(date).format('LL')}</span>
      </div>
      <div className='New_title'>{title}</div>
      <div className='New_description'>{truncate(description, { length: 150, separator: ' ', omission: ' ...' })}</div>
    </div>
  </li>
)

export default NewsIntranet
