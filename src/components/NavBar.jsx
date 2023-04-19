//////////////////////
// NavBar Component
//////////////////////

// Component
import Link from 'next/link';
import Button from '@/components/Button'

export default function NavBar(props) {

  // Template
  return (
    <div className="flex items-center p-5 text-teal-600 uppercase tracking-wide text-sm font-bold mb-2 fixed sticky top-0 z-50 bg-teal-50">
      <ul className="flex w-1/2">
        <li className='px-6 hover:text-teal-500 active:text-teal-700'>
        <Link href="/home">Happy Helpers</Link>
        </li>
        <li className='px-6 hover:text-teal-500 active:text-teal-700'>
          <Link href="/home">Home</Link>
        </li>
        <li className='px-6 hover:text-teal-500 active:text-teal-700'>
          <Link href="/new-task">New</Link>
        </li>
      </ul>
      <ul className="flex items-center  w-1/2 justify-end">
      <li className='px-6 hover:text-teal-500 active:text-teal-700'>
          <Link href="/user-tasks">MyHelp</Link>
        </li>
        <li className='px-6 hover:text-teal-500 active:text-teal-700'>
          <h2>Messages</h2>
        </li>
        <li className='px-6 hover:text-teal-500 active:text-teal-700'>
          <Link href={`/profile-page/${props.id}`}>{props.name}</Link>
        </li>
        <li className='px-6 hover:text-teal-500 active:text-teal-700'>
          <Button buttonName={"LOGOUT"}/>
        </li>
      </ul>
    </div>
  );
};