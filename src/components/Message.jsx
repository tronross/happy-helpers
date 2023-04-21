import Link from 'next/link';

export default function Message({ message, handleDelete }) {

  // Dates are sent as strings through props, so need to be formatted
  const messageTime = new Date(message.receivedAt);

  const getContent = function(msgType) {
    switch (msgType) {
    case "RECEIVED":
      return {
        subject:  "Offer of help received:",
        body:     "has offered to help with your request '",
        where:    "at your",
        pageLink: "/user-tasks",
        pageName: "myHelp"
      };
    case 'ACCEPTED':
      return {
        subject:  "Offer to help accepted:",
        body:     "has accepted your offer to help with the task '",
        where:    "in your",
        pageLink: `/profile-page/${message.userId}`,
        pageName: "profile"
      };
    case 'DENIED':
      return {
        subject:  "Offer to help declined:",
        body:     "doesn't need your help after all with the task '",
        where:    "in your",
        pageLink: `/profile-page/${message.userId}`,
        pageName: "profile"
      };
    case 'STAR':
      return {
        subject:  "You have received a star!",
        body:     " showed their appreciation for your help with the task '",
        where:    " in thier ",
        pageLink: `/profile-page/${message.cpId}`,
        pageName: "profile"
      };
    default:
      return {
        subject:  "Error: unknown message type.",
        body:     "",
        where:    "",
        pageLink: "#",
        pageName: ""
      };
    }
  };

  return (
    <section className="text-teal-600 text-xs relative font-normal">
      <p className="mb-1 font-semibold">
        {messageTime.toLocaleString('en-us', {weekday:"short", year:"numeric", month:"short", day:"numeric", hour:"2-digit", minute:"2-digit"})}
      </p>
      <p className="mb-1 font-medium uppercase">{getContent(message.type).subject}</p>
      <p className="mb-1">
        <Link href={`/profile-page/${message.cpId}`} className="underline">{message.cpName}</Link> {getContent(message.type).body}{message.taskName}&apos;.
      </p>
      <p className="mb-1">
        You can view the details {getContent(message.type).where} <Link href={getContent(message.type).pageLink} className="underline">{getContent(message.type).pageName}</Link> page.
      </p>
      <svg className="w-5 h-5 absolute top-1 right-1 hover:cursor-pointer" onClick={() => handleDelete(message.id)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <title>Delete message</title>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    </section>
  );
}