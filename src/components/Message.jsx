export default function Message({ message }) {

  return (
    <section className="text-teal-600 text-sm">
      <p className="mb-1 font-bold">id: {message.id}</p>
      <p className="mb-1 font-bold">user id: {message.user_id}</p>
      <p className="mb-1 font-bold">subject: {message.subject}</p>
      <p className="mb-1">message: {message.message}</p>
      <p className="mb-1 font-bold">marked read? {message.markedRead}</p>
      <p className="mb-1 font-bold">active? {message.active}</p>
    </section>
  );
}