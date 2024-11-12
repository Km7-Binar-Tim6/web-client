import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/cars/create')({
  component: () => <div>Hello /cars/create!</div>,
})
