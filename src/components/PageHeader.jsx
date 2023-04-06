export default function PageHeader() {
  return (
    <div className="flex justify-between m-4 text-lg">
      <section>
      <h1 className="text-[1.5em]">Discover Tasks in Rockland, ON</h1>
      </section>
      <section className="flex">
      <p className="mx-3">LIST</p>
      <p>|</p>
      <p className="mx-3">MAP</p>
      </section>
    </div>

  )
}