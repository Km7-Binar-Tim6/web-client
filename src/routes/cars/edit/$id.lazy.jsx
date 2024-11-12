import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/cars/edit/$id')({
  component: () => <div>Hello /cars/edit/$id!</div>,
})
