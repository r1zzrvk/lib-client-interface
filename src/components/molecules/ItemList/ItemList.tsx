import React from 'react'

type TItemList<T> = {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

// eslint-disable-next-line react/function-component-definition
export function ItemList<T>({ items, renderItem }: TItemList<T>) {
  return <>{items.map(renderItem)}</>
}
