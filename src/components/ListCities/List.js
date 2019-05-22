import React from 'react'


const List = (props) => (
    <ul>
      {props.list.map(item => (
        <li key={item.id}>
          <div><a href='#'>{item.content}</a></div>
        </li>
      ))}
    </ul>
);

export default List;