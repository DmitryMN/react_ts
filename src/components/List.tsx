import React from 'react'

type ListPropsType<T> = {
    items: T[]
    renderItem: (item: T) => React.ReactNode
}

function List<T>(props: ListPropsType<T>) {
  return (
    <div>
        { props.items.map(props.renderItem) }
    </div>
  )
}

export default List;
