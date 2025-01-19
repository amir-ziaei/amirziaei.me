import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Amir Ziaei' }]
}

export default function Home() {
  return (
    <>
      <section className="mt-10 flex justify-center gap-4 flex-col items-center">
        <img
          alt="A photo of Amir Ziaei"
          src="./img/avatar.jpg"
          className="size-32 rounded-full object-cover"
        />
        <div className="text-center">
          <h1 className="text-2xl">Amir Ziaei</h1>
          <p>Senior Frontend Engineer @ Flo.Health</p>
        </div>
      </section>
    </>
  )
}
